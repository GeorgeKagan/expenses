<?php

namespace App;

/**
 * Singleton
 */
class OAuth
{
    const SESSION_KEY = 'oauth';
    const CLIENT_SECRETS = '/../client_secrets.json';
    const CALLBACK_ROUTE = '/finishLogin';

    /**
     * @var \Google_Client
     */
    private $client;

    public function __construct()
    {
        $this->initClient();
        $this->setAccessToken();
    }

    /**
     * Return the mighty Client
     *
     * @return \Google_Client
     */
    public function getClient()
    {
        return $this->client;
    }

    /**
     * Init the Google Client
     */
    private function initClient()
    {
        $this->client = new \Google_Client();
        $this->client->setApplicationName('Expenses');
        $this->client->setAuthConfig('../client_secrets.json');
        $this->client->setScopes(implode(' ', [
            \Google_Service_Sheets::SPREADSHEETS_READONLY
        ]));
    }

    /**
     * Fetch access token from session and set it on the Client
     */
    private function setAccessToken()
    {
        $access_token = json_decode(request()->session()->get('oauth'), true);

        if (!$access_token) {
            exit('No access token!');
        }
        $this->client->setAccessToken($access_token);
    }
}
