<?php

namespace App\Http\Controllers;

use App\Expense;

class ExpenseController extends Controller
{
    public function __construct()
    {

    }

    public function index()
    {
        return (new Expense())->getAll();
    }
}
