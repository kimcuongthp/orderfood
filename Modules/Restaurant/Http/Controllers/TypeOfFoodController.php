<?php
/**
 * Created by PhpStorm.
 * User: Tran Vuong
 * Date: 8/30/2018
 * Time: 3:11 PM
 */

namespace Modules\Restaurant\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Restaurant\Entities\TypeOfFood;


class TypeOfFoodController extends  Controller
{
    public function index(Request $request)
    {
        $restaurant_id = $request->input("restaurant_id");
        if(!$restaurant_id) $restaurant_id =0;
        $typeoffood =Typeoffood::where('restaurant_id',$restaurant_id)->with('foods')->get();
        return view('restaurant::typeoffood.index',compact('typeoffood','restaurant_id'));
    }

    public function modal(Request $request){
        $id=$request->route('id');
        $restaurant_id =$request->input('restaurant_id');
        $type = Typeoffood::find($id);
        if(!$type){
            $type = new Typeoffood();
            $type->id = 0;
            $type->restautant_id =(int)$restaurant_id;
        }

        return view('restaurant::typeoffood.modal',compact('type'));
    }

    public function update(Request $request){
        $id =$request->input('id');
        $restaurant_id =  $request->input('restaurant_id');
        $data = Typeoffood::find($id);
        if(!$data){
            $data = new Typeoffood();
            $data->restaurant_id =$restaurant_id;
            $data->save();
            foreach (LaravelLocalization::getSupportedLocales() as $locale => $language) {
                $name = $locale.'_name';
                $data->translateOrNew($locale)->name = $request->{$name};
            }
            $data->save();
        }else{

            foreach (LaravelLocalization::getSupportedLocales() as $locale => $language) {
                $name = $locale.'_name';
                $data->translate($locale)->name = $request->{$name};
            }
            $data->save();
        }
        return redirect()->back()->with([
            'note_type'  =>  'success',
            'note'       =>  'Lưu loại món ăn thành công!'
        ]);
    }

    public function delete(Request $request)
    {
        try{
            $id=$request->route('id');
            $data = Typeoffood::find($id);
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
}