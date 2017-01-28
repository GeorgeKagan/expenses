<?php

namespace App\Http\Middleware;

use Closure;
use App\OAuth;

class RedirectIfAuthenticated
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
        if ($request->session()->has(OAuth::SESSION_KEY)) {
            return redirect('/');
        }

        return $next($request);
    }
}
