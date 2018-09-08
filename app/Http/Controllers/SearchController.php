<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Address\Entities\City;
use Modules\Address\Entities\District;
use Modules\Restaurant\Entities\Restaurant;

class SearchController extends Controller
{
    public function index(Request $request){

        $cities = City::all();
        $html = '<option value="0">Chọn quận huyện</option>';

        if(!$request->city && !$request->district)
        {
            $restaurants = Restaurant::with('categories')->paginate(8);
        }
        elseif($request->district)
        {
            $restaurants = Restaurant::with('categories')->where('district_id', $request->district)->paginate(8);
            $district = District::with('city.districts')->where('id', $request->district)->first();

            foreach($district->city->districts as $item)
            {
                $html .= '<option value="'.$item->id.'"'. ($item->id == $request->district ? ' selected' : '')  .'>'.$item->name.'</option>';
            }
        }
        else
        {
            $restaurants = Restaurant::with('categories')->where('city_id', $request->city)->paginate(8);
            $city = City::with('districts')->findOrFail($request->city);
            foreach($city->districts as $item)
            {
                $html .= '<option value="'.$item->id.'"'. ($item->id == $request->district ? ' selected' : '')  .'>'.$item->name.'</option>';
            }
        }

        if($request->category)
        {
            $result = collect();
            foreach($restaurants as $restaurant)
            {
                $result = $result->merge($restaurant->whereHas('categories', function ($q) use($request) {
                    $q->where('id',$request->category);
                })->get());
            }
            dd($result);
        }
        return view('frontend.search', compact('restaurants','cities', 'html'));
    }
}
