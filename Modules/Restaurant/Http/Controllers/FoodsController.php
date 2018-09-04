<?php

namespace Modules\Restaurant\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Restaurant\Entities\Food;
use Modules\Restaurant\Entities\FoodOption;
use Modules\Restaurant\Entities\Restaurant;
use Modules\Restaurant\Entities\SubOption;
use Modules\Restaurant\Entities\Typeoffood;


class FoodsController extends Controller
{
    /**
     * Danh sach mon an cua nha hang
     * @return Response
     */
    public function index(Request $request)
    {
        $restaurant_id =$request->res_id;
        $typeoffood_id =$request->type_id;
        if($typeoffood_id ==null || $typeoffood_id ==0){
            $foods = Food::with('typeoffood')->orderBy('typeoffood_id')->get();
        }else{
            $foods = Food::with('typeoffood')->where('typeoffood_id',$typeoffood_id)->orderBy('typeoffood_id')->get();
        }

        $typeoffoods = Typeoffood::where('restaurant_id',$restaurant_id)->get();
        return view('restaurant::food.index',compact('restaurant_id','typeoffood_id','foods','typeoffoods'));
    }

    public function show(Request $request)
    {
//        abort(404);
        $restaurant_id =$request->res_id;
        $id =$request->id;
        $food = Food::find($id);
        if(!$food){
            $food = new Food();
            $food->id =0;
        }else{
            $food = Food::where('id',$id)->with('food_options')->first();
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
            $food->number_of_order =0;
        }
        $food->typeoffood_id=$request->typeoffood_id;
        $food->price =$request->price;
        $food->image =$request->image;
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

        ///  cap nhat mon an phu ----------------------------------------------

        // xoa food option
        $foodOption_id = $request->vi_foodoption_id;
        if($foodOption_id ==null) $foodOption_id =array();

        $delFoodOptions = FoodOption::where('food_id',$food->id)->whereNotIn('id',$foodOption_id)->get();

        if($delFoodOptions->count() > 0){
            foreach ($delFoodOptions as $delFoodOption){
                $delSubOptions = SubOption::where('food_option_id',$delFoodOption->id)->get();
                if($delSubOptions->count() > 0){
                    foreach ($delSubOptions as $delSubOption){
                        $delSubOption->delete();
                    }
                }
                $delFoodOption->delete();
            }
        }

        // xoa food option

        $numberOfFoodOption =$request->vi_foodoption_name !=null ? count($request->vi_foodoption_name):0;
        $from_subOption =0;
        for ($i =0; $i < $numberOfFoodOption;$i++){
            $foodOptionID = (int)$request->{$defaultLocattion.'_foodoption_id'}[$i];
            $foodOption = FoodOption::find($foodOptionID);
            if(!$foodOption){
                $foodOption = new FoodOption();
                $foodOption->food_id = $food->id;
            }

            $foodOption->one_or_more = (int)$request->{$defaultLocattion.'_foodoption_one_or_more'}[$i];
            $foodOption->save();

            foreach (LaravelLocalization::getSupportedLocales() as $locale => $language) {
                if($locale != $defaultLocattion){
                    $foodOption->translateOrNew($locale)->name = $request->{$locale.'_foodoption_name'}[$i] == null ? $request->{$defaultLocattion.'_foodoption_name'}[$i]:$request->{$locale.'_foodoption_name'}[$i];
                    $foodOption->translateOrNew($locale)->note = $request->{$locale.'_foodoption_note'}[$i] == null ? $request->{$defaultLocattion.'_foodoption_note'}[$i]:$request->{$locale.'_foodoption_note'}[$i];
                }else{
                    $foodOption->translateOrNew($locale)->name = $request->{$locale.'_foodoption_name'}[$i];
                    $foodOption->translateOrNew($locale)->note = $request->{$locale.'_foodoption_note'}[$i];
                }
            }
            $foodOption->save();

            /// danh sach mon an phu
            // xoa sub option
            $subOption_id = $request->vi_subOption_id;
            if($subOption_id ==null) $subOption_id =array();
            $delSubOptions = SubOption::where('food_option_id',$foodOptionID)->whereNotIn('id',$subOption_id)->get();
            if($delSubOptions->count() > 0){
                foreach ($delSubOptions as $delSubOption){
                    $delSubOption->delete();
                }
            }
            // xoa sub option

            $to_subOption =$request->count_subOption[$i] + $from_subOption;

            for($j=$from_subOption; $j<$to_subOption;$j++)
            {
                $subOption = SubOption::find((int)$request->{$defaultLocattion.'_subOption_id'}[$j]);
                if(!$subOption){
                    $subOption = new SubOption();
                    $subOption->food_option_id =$foodOption->id;
                }
                $subOption->price =$request->{$defaultLocattion.'_suboption_price'}[$j];

                $subOption->save();
                foreach (LaravelLocalization::getSupportedLocales() as $locale => $language) {
                    if($locale != $defaultLocattion){
                        $subOption->translateOrNew($locale)->name = $request->{$locale.'_suboption_name'}[$j] ==null ? $request->{$defaultLocattion.'_suboption_name'}[$j]:$request->{$locale.'_suboption_name'}[$j];
                    }else{
                        $subOption->translateOrNew($locale)->name = $request->{$locale.'_suboption_name'}[$j];
                    }
                }
                $subOption->save();
            }
            $from_subOption = $to_subOption;
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