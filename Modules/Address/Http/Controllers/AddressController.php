<?php

namespace Modules\Address\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Address\Entities\City;
use Modules\Address\Entities\District;

class AddressController extends Controller
{
    public function index()
    {
        $cities = City::defaultOrder()->get()->toTree();
        $districts = District::all();
        return view('address::index', compact('cities', 'districts'));
    }

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

    public function order(Request $request)
    {
        $order = json_decode($request->order, true);
        City::rebuildTree($order);
    }

    public function editCity(City $city)
    {
        return view('address::city.edit', compact('city'));
    }


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

    public function loadAllCity()
    {
        $cities = City::all();
        return view('address::city.select', compact('cities'));
    }
}
