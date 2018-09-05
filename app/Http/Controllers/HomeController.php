<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Restaurant\Entities\Category;
use Modules\Restaurant\Entities\Restaurant;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::with('restaurants')->take(8)->get();
//        dd($categories->first()->restaurants);
        $restaurants = Restaurant::all();
        return view('frontend.index', compact('categories','restaurants'));
    }
}
