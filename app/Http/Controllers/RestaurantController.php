<?php
/**
 * Created by PhpStorm.
 * User: Tran Vuong
 * Date: 9/4/2018
 * Time: 2:56 PM
 */

namespace App\Http\Controllers;


use App\Rates;
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
        $star = collect(DB::select('select round(sum(star)/count(*)) as star  from rates where rates.restaurant_id = :id',['id'=>$id]))->first();
        $star = $star==null ? 5 : $star->star;
        $comments = collect(DB::select('select u.full_name, u.image, f.message,f.star, f.updated_at from rates f , user_info u where f.user_id = u.user_id and f.restaurant_id ='.$id));
        $rated = Rates::where(['user_id'=>Auth::user()->id, 'restaurant_id'=>$request->id])->exists();
        return view('frontend.restaurant',compact('restaurant','isOpen','priceMaxMin','star','comments','rated'));
    }

    public function rate(Request $request){

        $rated = Rates::where(['user_id'=>Auth::user()->id, 'restaurant_id'=>$request->id])->exists();
        if($rated ==false){
            $rate = new Rates();
            $rate->restaurant_id = $request->id;
            $rate->user_id = Auth::user()->id;
            $rate->star = (int)$request->rates;
            $rate->message =$request->message;
            $rate->save();
        }
        return redirect('/restaurant/'.$request->id);
    }
}