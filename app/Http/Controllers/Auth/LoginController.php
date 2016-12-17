<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    const SESSION_KEY = 'oauth';
    const AUTH_FLAG_COOKIE = 'is_logged_in';
    const CALLBACK_ROUTE = '/finishLogin';
    const CLIENT_SECRETS = '/../client_secrets.json';

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
        $this->client->setAuthConfig($_SERVER['DOCUMENT_ROOT'] . self::CLIENT_SECRETS);
        $this->client->setRedirectUri('http://' . $_SERVER['HTTP_HOST'] . self::CALLBACK_ROUTE);
        $this->client->setAccessType('offline');
    }

    /**
     * Redirect user to OAuth screen.
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
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
            $request->session()->put(self::SESSION_KEY, json_encode($access_token));
        }

        return $this->redirectWithCookie('/', true);
    }

    /**
     * Delete session and auth flag cookie.
     * @param Request $request
     * @return mixed
     */
    public function logout(Request $request)
    {
        $request->session()->forget(self::SESSION_KEY);

        return $this->redirectWithCookie('/', false);
    }

    /**
     * cookie() params are as follows:
     * 'name', 'value', $minutes, $path, $domain, $secure, $httpOnly
     * @param string $path
     * @param bool $val
     * @return mixed
     */
    private function redirectWithCookie(string $path, bool $val)
    {
        return redirect($path)
            ->cookie(self::AUTH_FLAG_COOKIE, $val, config('session.lifetime'), '/', env('APP_URL'), false, false);
    }
}
