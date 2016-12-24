<?php

namespace App\Http\Middleware;

use Closure;

class CheckAccessToken
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
        if ($request->is('/')) {
            return $next($request);
        }
        try {
            $oauth = resolve('OAuth');
        }
        catch (\Exception $e) {
            // Means token has been revoked by the user, nothing to do - redirect to auth page
            if ($e->getMessage() === 'Invalid token format') {
                if (1) {
                    return redirect('/');
                }
                return ['error' => $e->getMessage()];
            }
        }

        return $next($request);
    }
}
