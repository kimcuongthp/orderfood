<?php

namespace Modules\Address\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\HtmlString;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Address\Entities\City;
use Modules\Address\Entities\District;

class AddressController extends Controller
{
    public function index()
    {
        $cities = City::defaultOrder()->get()->toTree();
        $districts = District::with('city')->simplePaginate(2);
        return view('address::index', compact('cities', 'districts'));
    }

    #Lưu dữ liệu tỉnh thành quận huyện
    public function store(Request $request)
    {
        #Kiểm tra kiểu
        if($request->type == 'city')
        {
            try{
                $city = new City();
                $city->save();
                foreach (LaravelLocalization::getSupportedLocales() as $locale => $language) {
                    $name = $locale.'_name';
                    $city->translateOrNew($locale)->name = $request->{$name};
                }
                $city->save();
                return redirect()->back()->with([
                    'note_type'  =>  'success',
                    'note'       =>  'Thêm Thành phố thành công!'
                ]);
            }
            catch (\Exception $e)
            {
                return redirect()->back()->with([
                    'note_type' => 'error',
                    'note'      => 'Lỗi xảy ra! Vui lòng báo với quản trị viên.'
                ]);
            }
        }
        else
        {
            try {
                $district = new District();
                $district->city_id = $request->city_id;
                $district->save();
                foreach (LaravelLocalization::getSupportedLocales() as $locale => $language) {
                    $name = $locale.'_name';
                    $district->translateOrNew($locale)->name = $request->{$name};
                }
                $district->save();
                return redirect()->back()->with([
                    'note_type'  =>  'success',
                    'note'       =>  'Thêm Quận huyện thành công!'
                ]);

            }
            catch (\Exception $e)
            {
                return redirect()->back()->with([
                    'note_type' => 'error',
                    'note'      => 'Lỗi xảy ra! Vui lòng báo với quản trị viên.'
                ]);
            }
        }

    }

    #Sắp xếp thứ tự Tỉnh thành
    public function order(Request $request)
    {
        $order = json_decode($request->order, true);
        City::rebuildTree($order);
    }

    #Show giao diện sửa thành phố
    public function editCity(City $city)
    {
        return view('address::city.edit', compact('city'));
    }

    #Show giao diện sửa quận huyện
    public function editDistrict(District $district)
    {
        $cities = City::all();
        return view('address::district.edit', compact('district', 'cities'));
    }


    #Cập nhật dữ liệu thành phố
    public function updateCity(City $city, Request $request)
    {
        try {
            foreach (LaravelLocalization::getSupportedLocales() as $locale => $language) {
                $name = $locale . '_name';
                $city->translate($locale)->name = $request->{$name};
            }
            $city->save();
            return redirect()->back()->with([
                'note_type'  =>  'success',
                'note'       =>  'Lưu Thành phố thành công!'
            ]);
        }
        catch (\Exception $e)
        {
            return redirect()->back()->with([
                'note_type' => 'error',
                'note'      => 'Lỗi xảy ra! Vui lòng báo với quản trị viên.'
            ]);
        }

    }

    #Cập nhât dữ liệu quận huyện
    public function updateDistrict(District $district, Request $request)
    {
        try{

            $district->city_id = $request->city_id;
            foreach (LaravelLocalization::getSupportedLocales() as $locale => $language) {
                $name = $locale . '_name';
                $district->translate($locale)->name = $request->{$name};
            }
            $district->save();

            return redirect()->back()->with([
                'note_type'  =>  'success',
                'note'       =>  'Lưu Thành phố thành công!'
            ]);
        }
        catch (\Exception $e)
        {
            return redirect()->back()->with([
                'note_type' => 'error',
                'note'      => 'Lỗi xảy ra! Vui lòng báo với quản trị viên.'
            ]);
        }
    }

    #Show tất cả thành phố
    public function loadAllCity()
    {
        $cities = City::all();
        return view('address::city.select', compact('cities'));
    }

    #Xóa quận huyện
    public function deleteDistrict(District $district)
    {
        try{
            $district->delete();
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

    #Xóa thành phố
    public function deleteCity(City $city)
    {
        try{
            $city->delete();

            #Xóa city_id của quận huyện
            if(count($city->districts))
            {
                foreach($city->districts as $district)
                {
                    $district->city_id = '';
                }
            }
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

    #Lấy danh sách quyện huyện qua thành phố
    public function districtsByCity(City $city)
    {
        $rs = '<option value="">Chọn quận huyện</option>';
        if($city){
            $districts = $city->districts;
            if(count($districts))
            {
                foreach($districts as $district)
                {
                    $rs .= '<option value="'.$district->id.'">'.$district->name.'</option>';
                }
            }
        }
        return new HtmlString($rs);
    }
}
