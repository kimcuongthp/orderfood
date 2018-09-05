<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Address\Entities\City;
use Modules\Restaurant\Entities\Restaurant;

class SearchController extends Controller
{
    public function index(Request $request){
        if(!$request->city && !$request->district)
        {
            abort('404');
        }
        $cities = City::all();

        if($request->district)
        {
            $restaurants = Restaurant::where('district_id', $request->district)->paginate(8);
        }
        else
        {
            $restaurants = Restaurant::where('city_id', $request->city)->paginate(8);
        }
        return view('frontend.search', compact('restaurants','cities'));
    }
}
