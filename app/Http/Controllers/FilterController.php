<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Address\Entities\City;
use Modules\Restaurant\Entities\Category;
use Modules\Restaurant\Entities\Restaurant;

class FilterController extends Controller
{
    public function index(Request $request)
    {
        $cities = City::defaultOrder()->get();
        $categories = Category::all();

        if(!empty($request->area) && !empty($request->phanloai) && is_array($request->area) && is_array($request->phanloai))
        {
            $restaurants = Restaurant::whereHas('categories', function ($q) use($request) {
                    $q->whereIn('id',$request->phanloai);
                })
                ->whereIn('city_id',$request->area)
                ->paginate(8);
            $count = $restaurants->count();
        }
        elseif(!empty($request->area) && empty($request->phanloai) && is_array($request->area))
        {
            $restaurants = Restaurant::whereIn('city_id',$request->area)
                ->paginate(8);
            $count = $restaurants->count();
        }
        elseif(!empty($request->phanloai) && empty($request->phanloai) && is_array($request->phanloai))
        {
            $restaurants = Restaurant::whereHas('categories', function ($q) use($request) {
                $q->whereIn('id',$request->phanloai);
            })->paginate(8);
            $count = $restaurants->count();
        }
        else
        {
            $count = Restaurant::count();
            $restaurants = Restaurant::paginate(8);
        }
        return view('frontend.order2', compact('cities','count','categories','restaurants'));
    }
}
