<?php

namespace Modules\Restaurant\Http\Controllers;

use App\User;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Address\Entities\City;
use Modules\Address\Entities\District;
use Modules\Restaurant\Entities\Category;
use Modules\Restaurant\Entities\RCRelation;
use Modules\Restaurant\Entities\Restaurant;
use Modules\Restaurant\Http\Requests\CreateRestaurantRequest;
use Modules\Restaurant\Http\Requests\UpdateRestaurantRequest;
use Modules\User\Entities\UserInfo;

class RestaurantController extends Controller
{
    public function index()
    {
        $restaurants = Restaurant::simplePaginate(10);
        return view('restaurant::index', compact('restaurants'));
    }
    public function createRestaurant()
    {
        $categories = Category::all();
        $cities = City::all();
        return view('restaurant::create', compact('categories','cities'));
    }

    public function storeRestaurant(CreateRestaurantRequest $request)
    {
        dd($request->toArray());
        #Thêm vào bảng user trước
        $user = User::create([
            'name' => $request->username,
            'password' => Hash::make($request->password),
            'email' => $request->user_email
        ]);

        if(!$user)
        {
            return redirect()->back()->with([
                'note_type' => 'error',
                'note'      => 'Lỗi không tạo được tài khoản vui lòng thử lại!'
            ]);
        }

        #Thêm vào bảng thông tin user
        UserInfo::create([
            'user_id' => $user->id
        ]);

        #Gán quyền nhà hàng cho tài khoản
        $user->assignRole('Agency');

        #Thêm vào bảng nhà hàng
        $request->request->add(['user_id' => $user->id]);

        $restaurant = Restaurant::create($request->all());

        foreach (LaravelLocalization::getSupportedLocales() as $locale => $language) {
            if ($request->input($locale . '_name')) {
                $restaurant->translateOrNew($locale)->name = $request->input($locale . '_name');
                $restaurant->translateOrNew($locale)->address = $request->input($locale . '_address');
                $restaurant->translateOrNew($locale)->description = $request->input($locale . '_description');
            }
        }
        $restaurant->save();

        #Thêm vào bảng liên kết nhà hàng và danh mục nhà hàng
        if($request->input('category_id'))
        {
            foreach($request->input('category_id') as $id)
            {
                RCRelation::create([
                    'restaurant_id' => $restaurant->id,
                    'category_id' => $id
                ]);
            }
        }

        return redirect()->back()->with([
            'note_type' => 'success',
            'note'      => 'Tạo nhà hàng thành công!'
        ]);
    }

    public function editRestaurant(Restaurant $restaurant)
    {
        #Check quyền agency
        $user = User::where('id', Auth::user()->id)->firstOrFail();
        if(!$user->hasRole('Staff'))
        {
            $own_restaurant = Restaurant::where('user_id', $user->id)->firstOrFail();
            if($own_restaurant->id !== $restaurant->id)
            {
                abort('404');
            }
        }

        $categories = Category::all();
        $cities = City::all();

        $selected_categories = $restaurant->categories()->pluck('id')->toArray();

        $html = "";

        if($restaurant->district_id)
        {
            $district = District::where('id', $restaurant->district_id)->first();

            foreach($district->city->districts as $item)
            {
                $html .= '<option value="'.$item->id.'"'. ($item->id === $restaurant->district_id ? ' selected' : '')  .'>'.$item->name.'</option>';
            }
        }

        return view('restaurant::edit', compact('restaurant','categories','cities','selected_categories', 'html'));
    }

    public function updateRestaurant(UpdateRestaurantRequest $request, Restaurant $restaurant)
    {
        #Check quyền agency
        $user = User::where('id', Auth::user()->id)->firstOrFail();
        if(!$user->hasRole('Staff'))
        {
            $own_restaurant = Restaurant::where('user_id', $user->id)->firstOrFail();
            if($own_restaurant->id !== $restaurant->id)
            {
                abort('404');
            }
        }
        #update thông tin nhà hàng
        $restaurant->update($request->all());

        #update thông tin các trường đa ngôn ngữ
        foreach (LaravelLocalization::getSupportedLocales() as $locale => $language) {
            if ($request->input($locale . '_name')) {
                $restaurant->translateOrNew($locale)->name = $request->input($locale . '_name');
                $restaurant->translateOrNew($locale)->address = $request->input($locale . '_address');
                $restaurant->translateOrNew($locale)->description = $request->input($locale . '_description');
            }
        }
        $restaurant->save();

        #Xóa thông tin bảng liên kết nhà hàng và danh mục
        RCRelation::where('restaurant_id',$restaurant->id)->delete();

        #Thêm vào bảng liên kết nhà hàng và danh mục nhà hàng
        if($request->input('category_id'))
        {
            foreach($request->input('category_id') as $id)
            {
                RCRelation::create([
                    'restaurant_id' => $restaurant->id,
                    'category_id' => $id
                ]);
            }
        }

        return redirect()->back()->with([
            'note_type' => 'success',
            'note'      => 'Cập nhật thông tin nhà hàng thành công!'
        ]);
    }
}
