<?php

namespace App\Http\Middleware;

use Closure;
use App\OAuth;

class RedirectIfUnauthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$request->session()->has(OAuth::SESSION_KEY) && $request->is('/')) {
            return redirect('/login');
        }
        if (!$request->session()->has(OAuth::SESSION_KEY) || $request->is('login')) {
            return $next($request);
        }

        return $next($request);
    }
}
