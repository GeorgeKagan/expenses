<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    public function __construct()
    {

    }

    /**
     * Show the main SPA view
     */
    public function index()
    {
        return view('main');
    }
}
