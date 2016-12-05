<?php

namespace App;

class Expense
{
    public function getAll()
    {
        return [['year' => 2016, 'month' => 'december', 'recurrence' => 'monthly', 'date' => '05/12/2016', 'type' => 'car', 'typeLabel' => 'Car', 'amount' => 2040, 'description' => 'Cupra - loan']];
    }
}
