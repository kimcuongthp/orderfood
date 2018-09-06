<?php
/**
 * Created by PhpStorm.
 * User: Tran Vuong
 * Date: 9/4/2018
 * Time: 2:56 PM
 */

namespace App\Http\Controllers;


use App\Order;
use App\OrderDetail;
use App\OrderOptionDetail;
use App\Rates;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Modules\Restaurant\Entities\Food;
use Modules\Restaurant\Entities\FoodOption;
use Modules\Restaurant\Entities\Restaurant;
use Modules\Restaurant\Entities\SubOption;


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
        if(Auth::user() !=null){
            $rated = Rates::where(['user_id'=>Auth::user()->id, 'restaurant_id'=>$request->id])->exists();
        }else{
            $rated = false;
        }

        return view('frontend.restaurant',compact('restaurant','isOpen','priceMaxMin','star','comments','rated'));
    }

    public function rate(Request $request){
        if(Auth::user() ==null){
            return redirect('/restaurant/'.$request->id);
        }

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
    public function option(Request $request){
        $id =$request->id;
        $food = Food::with('food_options.sub_options')->findOrFail($id);
        $restaurant = collect(DB::select('select t.restaurant_id from foods f, typeoffoods t  where f.id =? and f.typeoffood_id = t.id',[$id]))->first();
        $restaurant_id =$restaurant != null ? $restaurant->restaurant_id : 0;

        $user_id = Auth::user()==null ? 0: Auth::user()->id;
        $order =collect(DB::select('select d.price, d.quality,p.sub_option_id from orders o, order_details d, order_option_details p where user_id ='.$user_id.' and restaurant_id ='.$restaurant_id.' and o.id= d.order_id and d.id = p.order_detail_id'));
        $price =0;
        $quality = 0;
        $orderOption =[];

        if($order != null  && $order->first() !=null){
            $price = $order->first()->price;
            $quality =$order->first()->quality;
            foreach ($order as $item ){
                array_push($orderOption, $item->sub_option_id);
            }
        }
        return view('frontend.option',compact('food','price','quality','orderOption'));
    }
    /// Trang thai don hang
    /// 0 huy
    /// 1 moi tao
    /// 2 cho duyet
    /// 3 da gui nha hang
    /// 4 nha hang dang chuan bi
    /// 5 dang van chuyen
    /// 6 hoan thanh

    public function orderItemModal(Request $request){
        if(Auth::user()==null) {
            return response()->json([
                'status' => false,
                'msg'=>'Please! Login'
            ]);
        }
        $user_id = Auth::user()->id;
        $food_id =(int)$request->item['food_id'];
        $restaurant_id = collect(DB::select('select r.id from foods f, typeoffoods t, restaurants r where f.typeoffood_id = t.id and t.restaurant_id = r.id and f.id =6'))->first()->id;
        $order = Order::where(['restaurant_id'=>$restaurant_id,'user_id'=>$user_id,'status'=>1])->first();
        $restaurant = Restaurant::find($restaurant_id);
        if($restaurant ==null) return response()->json(['status'=>false,'msg'=>'Restaurant does not exists']);
        if($order ==null){
            $order = new Order();
            $order->restaurant_id= $restaurant_id;
            $order->user_id =$user_id;
            $order->price =0;
            $order->trans_fee = $restaurant->trans_fee or 0;
            $order->sum_price=0;
        }
        $order->status=1;
        $order->save();
        //
        $food = Food::find($food_id);

        if($food ==null) {
            return response()->json(['status'=>false,'msg'=>'Food does not exists']);
        }
        $orderDetail =  OrderDetail::where(['food_id'=>$food_id,'order_id'=>$order->id])->first();
        if($orderDetail == null){
            $orderDetail = new OrderDetail();
            $orderDetail->order_id = $order->id;
            $orderDetail->food_id =$food_id;
        }else{
            $order->price = $order->price - $orderDetail->price;
            if($order->price <0) $order->price =0;
        }
        $orderDetail->name = '<b>'.$food->name.'<b> - '.$food->description1;
        $orderDetail->quality = (int)$request->item['item'];
        $orderDetail->price =(double)$request->item['total'];

        $order->price =$order->price + $orderDetail->price;
        $order->sum_price=$orderDetail->price + $order->trans_fee;
        $orderDetail->save();
        $order->save();

        $results  = $request->item['data'];
        $arrayID =[];
        foreach ($results as $result){
            $item = OrderOptionDetail::where(['order_detail_id'=>$orderDetail->id,'option_id'=>$result["food_option"],'sub_option_id'=>$result["sub_option"]])->first();
            if($item ==null){
                $item = new OrderOptionDetail();
                $item->order_detail_id = $orderDetail->id;
                $item->option_id =$result["food_option"];
                $foption = FoodOption::find($item->option_id);
                $item->option_name = $foption->name;
                $item->sub_option_id =$result["sub_option"];
                $suboption = SubOption::find($item->sub_option_id);
                $item->sub_option_name =$suboption->name;
            }
            $item->quality =1;
            $item->price =$result["price"];
            $item->save();
            array_push($arrayID, $item->id);
        }
        $orderOptions = OrderOptionDetail::whereNotIn('id',$arrayID)->get();
        foreach ($orderOptions as $orderOption){
            $orderOption->delete();
        }

        return response()->json([
            'status' => true,
            'msg'=>'updated'
        ]);
    }
}