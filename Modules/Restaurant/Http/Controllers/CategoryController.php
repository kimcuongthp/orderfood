<?php
namespace Modules\Restaurant\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Restaurant\Entities\Category;

class CategoryController extends Controller{
    public  function index(){
        $category = Category::all();

        return view('restaurant::category.index',compact('category'));
    }

    public function  modal(Request $request){
        $id=$request->route('id');
        $data = Category::find($id);
        if(!$data){
            $data = new Category();
            $data->id = 0;
        }
        return view('restaurant::category.modal',compact('data'));
    }

    public function update(Request $request){
        $id =$request->input('id');
        $data = Category::find($id);
        if(!$data){
            $data = new Category();
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
            'note'       =>  'Lưu danh mục thành công!'
        ]);
    }

    public function delete(Request $request)
    {
        try{
            $id=$request->route('id');
            $data = Category::find($id);
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