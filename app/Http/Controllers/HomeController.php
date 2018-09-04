<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Restaurant\Entities\Category;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::take(8)->get();
//        dd($categories->first()->restaurants);
        return view('frontend.index', compact('categories'));
    }
}
