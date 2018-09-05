<?php
/**
 * Created by PhpStorm.
 * User: Tran Vuong
 * Date: 9/4/2018
 * Time: 2:56 PM
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Modules\Restaurant\Entities\Restaurant;


class RestaurantController extends Controller
{
    public function index(Request $request)
    {
        $id=$request->id;
        $restaurant = Restaurant::with('typeoffood','categories','city')->find($id) or abort(404);
        $isOpen = false;
        $now =Carbon::now()->format('H:i');
        if(strtotime($restaurant->time_open) < strtotime($now) && strtotime($now) < strtotime($restaurant->time_close)) $isOpen = true;
        $priceMaxMin= collect(DB::select("select max(price) as 'max', min(price) as 'min' from foods f,typeoffoods t, restaurants r where r.id=:id and f.typeoffood_id = t.id and r.id = t.restaurant_id",['id'=>$id]))->first();
        return view('frontend.restaurant',compact('restaurant','isOpen','priceMaxMin'));
    }

    public  function rate(Request $request){
        $id =$request->id;
        $image ='//'.$request->getHttpHost().'/uploads/1/logo2.png';

    }
}