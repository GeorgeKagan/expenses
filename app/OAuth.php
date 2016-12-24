<?php

namespace App;

class OAuth
{
    const SESSION_KEY = 'oauth';

    private $client;

    public function __construct()
    {
        $this->refreshAccessToken();
    }

    public function getClient()
    {
        return $this->client;
    }

    private function refreshAccessToken()
    {
        $client = new \Google_Client();
        $client->setApplicationName('Expenses');
        $client->setScopes(implode(' ', [
                \Google_Service_Sheets::SPREADSHEETS_READONLY
        ]));
        $client->setAuthConfig('../client_secrets.json');
        //$client->setAccessType('offline');
        $access_token = json_decode(request()->session()->get('oauth'), true);
        $client->setAccessToken($access_token);

        // Fetch new access token regardless of whether it was expired
        // Mainly for overcoming revoked tokens
        $new_token = $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
        $new_token['refresh_token'] = $access_token['refresh_token'];
//        request()->session()->put(self::SESSION_KEY, json_encode($new_token));

        $client->setAccessToken($new_token);
        $this->client = $client;
    }
}
