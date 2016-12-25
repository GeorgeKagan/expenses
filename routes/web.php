<?php

Route::get('/', 'HomeController@index');

// Show login form
Route::get('/login', 'Auth\LoginController@showLogin');

// Redirects to G+ auth screen
Route::post('/login', 'Auth\LoginController@login');

// Callback from G+ after user authorizes
Route::get('/finishLogin', 'Auth\LoginController@finishLogin');

// Log user out
Route::get('/logout', 'Auth\LoginController@logout');