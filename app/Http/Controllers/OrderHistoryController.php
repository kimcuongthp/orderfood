<?php
/**
 * Created by PhpStorm.
 * User: Tran Vuong
 * Date: 9/7/2018
 * Time: 11:11 AM
 */

namespace App\Http\Controllers;


use App\Order;
use App\OrderStatus;
use App\Status;
use Illuminate\Support\Facades\Auth;
use Modules\Address\Entities\City;
use Modules\Restaurant\Entities\Restaurant;

class OrderHistoryController extends  Controller
{
    public function history(){
        $cities = City::all();
        if(Auth::user()==null) {
            return response()->json([
                'status' => false,
                'msg'=>'Please! Login'
            ]);
        }
        $user_id =Auth::user()->id;
        $orders =Order::where('status','!=',1)->where('user_id',$user_id)->orderBy('created_at')->get();
        $result = [];
        foreach ($orders as $order){
            $data = new \stdClass();
            $data->id =$order->id;
            $data->sum_price =$order->sum_price;
            $data->time = $order->updated_at;
            $status =OrderStatus::find($order->status);
            $data->status = $status->name;
            $restaurant =Restaurant::find($order->restaurant_id);
            $data->restaurant =$restaurant->name;
            $data->image =$restaurant->image;
            array_push($result,$data);
        }
        return view('frontend.history',compact('cities','$result'));
    }
}