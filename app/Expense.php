<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

class Expense
{
    /**
     * @var \Google_Client
     */
    private $client;

    public function __construct()
    {
        $oauth = resolve('OAuth');
        $this->client = $oauth->getClient();
    }

    public function getAll()
    {
        $service = new \Google_Service_Sheets($this->client);
        $spreadsheetId = env('SPREADSHEET_ID');
        $expiresAt = Carbon::now()->addMinutes(5);

        if (!$spreadsheetId) {
            return response()->json(['error' => 'Please specify SPREADSHEET_ID in .env'], 500);
        }

        // Get all sub-sheet names
        try {
            $response = Cache::get('mainSpreadsheet');

            if (!$response) {
                $response = $service->spreadsheets->get($spreadsheetId);
                Cache::put('mainSpreadsheet', $response, $expiresAt);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Token revoked'], $e->getCode());
        }
        $ranges = [];

        /**
         * @var $range \Google_Service_Sheets_Sheet
         */
        foreach ($response->getSheets() as $range) {
            if (!$range->getProperties()->hidden) {
                $ranges[] = $range->getProperties()->getTitle();
            }
        }

        // Get all data for the main sheet
        $response = Cache::get('subSpreadsheets');

        if (!$response) {
            $response = $service->spreadsheets_values->batchGet($spreadsheetId, ['ranges' => $ranges]);
            Cache::put('subSpreadsheets', $response, $expiresAt);
        }
        $sheets = $response->getValueRanges();
        $data = [];

        /**
         * @var $sheet \Google_Service_Sheets_ValueRange
         */
        foreach ($sheets as $sheet) {
            $range = $sheet->getRange();
            $matches = [];
            preg_match('/\'(.+)\'/', $range, $matches);
            list($month, $year) = explode(' ', $matches[1]);

            if (strlen($year) === 2) {
                $year = '20' . $year;
            }
            $rows = $sheet->getValues();

            foreach ($rows as $row) {
                $amount = $this->removeCurrencyFromAmount($row, 2);

                if (!$amount) {
                    continue;
                }
                $date = $this->convertDateToUSA($row[0]);
                $item = [
                    'year' => $year,
                    'month' => strtolower($month),
                    'recurrence' => $this->getRecurrence($row),
                    'date' => $date,
                    'type' => trim($row[1]),
                    'typeLabel' => trim($row[1]),
                    'amount' => $amount,
                    'description' => $row[3] ?? ''
                ];
                $item = array_merge($item, $this->getPayments($row));
                $data[] = $item;
            }
        }

        return $data;
    }

    public function convertDateToUSA(string $date)
    {
        return date('d/m/Y', strtotime(str_replace('/', '-', $date)));
    }

    public function removeCurrencyFromAmount($row, $index)
    {
        if (!empty($row[$index])) {
            $row[$index] = str_replace(',', '', $row[$index]);

            if (!ctype_digit(mb_substr($row[$index], 0, 1))) {
                $row[$index] = mb_substr($row[$index], 1);
            }
            $row[$index] = (int)$row[$index];

            return $row[$index];
        }

        return 0;
    }

    public function getRecurrence($row)
    {
        $label = $row[5] ?? 'once';
        $label = trim($label);

        if ($label === '✔') {
            $label = 'monthly';
        }
        else if (stristr($label, 'out of')) {
            $label = 'payments';
        }

        return $label;
    }

    public function getPayments($row)
    {
        $total = $this->removeCurrencyFromAmount($row, 4);
        $part = $this->removeCurrencyFromAmount($row, 2);

        if ($total && $part) {
            return [
                'currPaymentNum' => '?',
                'paymentsNum' => round($total / $part),
                'totalAmount' => $total ?? 0
            ];
        }

        return [];
    }
}
