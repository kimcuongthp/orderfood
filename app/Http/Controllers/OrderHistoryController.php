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
use App\StatusTimeline;
use Illuminate\Support\Facades\Auth;
use Modules\Address\Entities\City;
use Modules\Restaurant\Entities\Restaurant;
use Illuminate\Http\Request;

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
        $order_list =Order::where('status','!=',1)->where('user_id',$user_id)->orderBy('created_at')->paginate(15);
        $result = [];
        foreach ($order_list as $order){
            $data = new \stdClass();
            $data->id =$order->id;
            $data->sum_price =$order->sum_price;
            $data->time = $order->updated_at;
            $data->restaurant_id =$order->restaurant_id;

            $status =OrderStatus::find($order->status);
            $data->status = $status->name;

            $restaurant =Restaurant::find($order->restaurant_id);
            $data->restaurant =$restaurant->name;
            $data->image =$restaurant->image;
            array_push($result,$data);
        }
        $orders = $result;

        return view('frontend.history',compact('cities','orders','order_list'));
    }

    public function ModalHistory(Request $request){

        $order_id =$request->order_id;

        $order = Order::where('id',$order_id)->with('order_detail')->get()->first();

        $data = new \stdClass();
        $data->id =$order->id;
        $data->sum_price =$order->sum_price;
        $data->restaurant_id =$order->restaurant_id;

        $status =OrderStatus::find($order->status);
        $data->status = $status->name;

        $restaurant =Restaurant::find($order->restaurant_id);
        $data->restaurant =$restaurant->name;
        $data->image =$restaurant->image;
        $data->order_detail =$order->order_detail;

        $time =StatusTimeline::where(['order_id'=>$order_id,'status_id'=>1])->first();
        $data->time = $time->created_at or '';
        $timeline =StatusTimeline::where(['order_id'=>$order_id])->get();

        $data->timeline = $timeline;
        foreach ($timeline as $item){
            $tmp =OrderStatus::find($item->status_id);
            $item->name =$tmp->name or '';
        }
        return view('frontend.modal_history',compact('data'));
    }
}