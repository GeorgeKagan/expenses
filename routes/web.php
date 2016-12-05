<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', 'HomeController@index');

// Redirects to G+ auth screen
Route::post('/login', 'Auth\LoginController@login');

// Callback from G+ after user authorizes
Route::get('/finishLogin', 'Auth\LoginController@finishLogin');

// Log user out
Route::get('/logout', 'Auth\LoginController@logout');