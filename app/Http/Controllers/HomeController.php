<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Address\Entities\City;
use Modules\Restaurant\Entities\TagTranslation;
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

        #Get Tag
        $tags = TagTranslation::with('tag')->where('locale',LaravelLocalization::getCurrentLocale())->get();
        return view('frontend.index', compact('categories','restaurants','count_restaurants','cities','tags'));
    }
}
