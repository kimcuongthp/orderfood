<?php

namespace Modules\Restaurant\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Restaurant\Entities\Food;
use Modules\Restaurant\Entities\Restaurant;
use Modules\Restaurant\Entities\Typeoffood;


class FoodsController extends Controller
{
    /**
     * Danh sach mon an cua nha hang
     * @return Response
     */
    public function index(Request $request)
    {
        $restaurant_id =$request->route("res_id");
        $typeoffood_id =$request->route('type_id');
        $typeoffood = Typeoffood::find($typeoffood_id);
        $foods = Food::with('typeoffood')->where('typeoffood_id',$typeoffood_id)->get();
        return view('restaurant::food.index',compact('restaurant_id','typeoffood_id','typeoffood','foods','restaurant'));
    }

    public function show(Request $request)
    {
        $restaurant_id =$request->input("res_id");
        if(!$restaurant_id) $restaurant_id =0;
        $id =$request->route('id');
        $food = Food::find($id);
        if(!$food){
            $food = new Food();
            $food->id =0;
        }
        $typeoffood =Typeoffood::where('restaurant_id','=',$restaurant_id)->get();

        return view('restaurant::food.update',compact('typeoffood','restaurant_id','food'));
    }

    public function delete(Request $request)
    {
        try{
            $id=$request->input('id');

            $data = Food::find($id);
            $data->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Xóa thành công!'
            ]);
        }
        catch (\Exception $e)
        {
            return response()->json([
                'status' => 'error',
                'message' => 'Có lỗi xảy ra vui lòng báo với quản trị viên!'
            ]);
        }
    }
    public function update(Request $request)
    {
        $id =$request->input('id');
        $res_id =$request->input('restaurant_id');
        $food = Food::find($id);
        if(!$food)
        {
            $food = new Food();
            $food->typeoffood_id=$request->typeoffood_id;
            $food->price =$request->price;
            $food->number_of_order =0;
            $food->status =$request->status;
            $food->save();
            $defaultLocattion =LaravelLocalization::getCurrentLocale();
            foreach (LaravelLocalization::getSupportedLocales() as $locale => $language) {
                if($locale != $defaultLocattion){
                    $food->translateOrNew($locale)->name = $request->{$locale.'_name'} !=null ? $request->{$locale.'_name'}:$request->{$defaultLocattion.'_name'};
                    $food->translateOrNew($locale)->description1 = $request->{$locale.'_description1'} !=null ? $request->{$locale.'_description1'}:$request->{$defaultLocattion.'_description1'};
                    $food->translateOrNew($locale)->description2 = $request->{$locale.'_description2'} !=null ?  $request->{$locale.'_description2'}: $request->{$defaultLocattion.'_description2'};
                }else{
                    $food->translateOrNew($locale)->name = $request->{$locale.'_name'};
                    $food->translateOrNew($locale)->description1 = $request->{$locale.'_description1'};
                    $food->translateOrNew($locale)->description2 = $request->{$locale.'_description2'};
                }
            }
            $food->save();
        }
        else
        {
            $food->typeoffood_id=$request->typeoffood_id;
            $food->price =$request->price;
            $food->status =$request->status;
            $food->save();
            $defaultLocattion =LaravelLocalization::getCurrentLocale();
            foreach (LaravelLocalization::getSupportedLocales() as $locale => $language) {
                if($locale != $defaultLocattion){
                    $food->translate($locale)->name = $request->{$locale.'_name'} !=null ? $request->{$locale.'_name'}:$request->{$defaultLocattion.'_name'};
                    $food->translate($locale)->description1 = $request->{$locale.'_description1'} !=null ? $request->{$locale.'_description1'}:$request->{$defaultLocattion.'_description1'};
                    $food->translate($locale)->description2 = $request->{$locale.'_description2'} !=null ?  $request->{$locale.'_description2'}: $request->{$defaultLocattion.'_description2'};
                }else{
                    $food->translate($locale)->name = $request->{$locale.'_name'};
                    $food->translate($locale)->description1 = $request->{$locale.'_description1'};
                    $food->translate($locale)->description2 = $request->{$locale.'_description2'};
                }
            }
            $food->save();
        }

        return redirect()->route('foods.index',['res_id'=>$res_id,'id'=>$food->typeoffood_id])->with([
            'note_type'  =>  'success',
            'note'       =>  'Lưu món ăn thành công!'
        ]);
    }

    public function ChangeStatus(Request $request){
        try{
            $food =Food::find($request->id);
            if($food){
                $food->status = $request->status;
            }
            $food->save();

            return \response()->json([
                'status'=>true
            ]);
        }catch(\Exception $e){
            return \response()->json([
                'status'=>false
            ]);
        }
    }
}

