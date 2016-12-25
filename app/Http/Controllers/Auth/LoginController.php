<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\OAuth;

class LoginController extends Controller
{
    /**
     * @var \Google_Client
     */
    private $client;

    /**
     * Define middleware and init OAuth provider SDK.
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);

        // Init Google SDK
        $this->client = new \Google_Client();
        $this->client->addScope(\Google_Service_Sheets::SPREADSHEETS_READONLY);
        $this->client->setAuthConfig($_SERVER['DOCUMENT_ROOT'] . OAuth::CLIENT_SECRETS);
        $this->client->setRedirectUri('http://' . $_SERVER['HTTP_HOST'] . OAuth::CALLBACK_ROUTE);
        $this->client->setAccessType('offline');
    }

    /**
     * Show the login view.
     */
    public function showLogin()
    {
        return view('login');
    }

    /**
     * Redirect user to OAuth screen.
     */
    public function login()
    {
        $auth_url = $this->client->createAuthUrl();
        return redirect(filter_var($auth_url, FILTER_SANITIZE_URL));
    }

    /**
     * Callback from OAuth provider, get code, exchange for access token and store it in the session.
     * @param Request $request
     * @return mixed
     */
    public function finishLogin(Request $request)
    {
        $code = $request->get('code');

        if (!$code) {
            exit('No code received from Google+');
        }
        $this->client->authenticate($_GET['code']);
        $access_token = $this->client->getAccessToken();

        if ($access_token) {
            $request->session()->put(OAuth::SESSION_KEY, json_encode($access_token));
        }

        return redirect('/');
    }

    /**
     * Delete session and auth flag cookie.
     * @param Request $request
     * @return mixed
     */
    public function logout(Request $request)
    {
        $request->session()->forget(OAuth::SESSION_KEY);

        return redirect('/');
    }
}
