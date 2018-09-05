<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Restaurant\Entities\Category;
use Modules\Restaurant\Entities\Restaurant;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::with('restaurants')->take(8)->get();
        $count_restaurants = Restaurant::count();
        $restaurants = Restaurant::paginate(8);
        if($request->ajax())
        {
            return view('frontend.load', ['restaurants' => $restaurants])->render();
        }
        return view('frontend.index', compact('categories','restaurants','count_restaurants'));
    }

//    public function restaurants_ajax(Request $request)
//    {
//
//    }
}
