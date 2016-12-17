<?php

Route::group(['middleware' => 'api'], function () {
    // See https://laravel.com/docs/5.3/controllers#resource-controllers
    Route::resource('expense', 'ExpenseController');
});
