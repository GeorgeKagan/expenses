<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    const SESSION_KEY = 'oauth';
    const CALLBACK_ROUTE = '/finishLogin';
    const CLIENT_SECRETS = '/../client_secrets.json';

    /**
     * @var \Google_Client
     */
    private $client;

    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);

        // Init Google SDK
        $this->client = new \Google_Client();
        $this->client->addScope(\Google_Service_Drive::DRIVE_READONLY);
        $this->client->setAuthConfig($_SERVER['DOCUMENT_ROOT'] . self::CLIENT_SECRETS);
        $this->client->setRedirectUri('http://' . $_SERVER['HTTP_HOST'] . self::CALLBACK_ROUTE);
    }

    public function login()
    {
        $auth_url = $this->client->createAuthUrl();
        header('Location: ' . filter_var($auth_url, FILTER_SANITIZE_URL));
        exit;
    }

    public function finishLogin(Request $request)
    {
        $code = $request->get('code');

        if (!$code) {
            exit('No code received from Google+');
        }
        $this->client->authenticate($_GET['code']);
        $access_token = $this->client->getAccessToken();
        $request->session()->put(self::SESSION_KEY, $access_token);
        header('Location: /');
        exit;
    }
}
