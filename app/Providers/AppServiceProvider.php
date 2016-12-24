<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\OAuth;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('OAuth', function () {
            return new OAuth();
        });
    }
}
