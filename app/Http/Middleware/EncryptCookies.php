<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Cookie\Middleware\EncryptCookies as BaseEncrypter;

class EncryptCookies extends BaseEncrypter
{
    /**
     * The names of the cookies that should not be encrypted.
     *
     * @var array
     */
    protected $except = [
        LoginController::AUTH_FLAG_COOKIE
    ];
}