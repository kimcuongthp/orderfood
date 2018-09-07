<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Address\Entities\City;
use Response;
use Modules\Restaurant\Entities\Category;
use Modules\Restaurant\Entities\Restaurant;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::with('restaurants')->take(8)->get();
        $count_restaurants = Restaurant::count();
        $restaurants = Restaurant::paginate(8);
        $cities = City::all();
        if($request->category)
        {
            $category = Category::findOrFail($request->category);
            $restaurants = $category->restaurants()->paginate(8);
            $restaurants->withPath('?category='.$request->category);
        }
        return view('frontend.index', compact('categories','restaurants','count_restaurants','cities'));
    }
}
