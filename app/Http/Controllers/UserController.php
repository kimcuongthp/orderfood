<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserInfo;
use App\User;
use Illuminate\Support\Facades\Auth;
use Modules\Address\Entities\City;
use Modules\User\Entities\UserInfo;

class UserController extends Controller
{
    public function index()
    {
        $cities = City::all();
        $user_info = UserInfo::where('user_id',Auth::user()->id)->firstOrFail();
        return view('frontend.userinfo', compact('cities','user_info'));
    }

    public function update(UpdateUserInfo $request)
    {
        #update Email
        $user = User::find(Auth::user()->id);
        $user->email = $request->user_email;
        $user->save();

        #update bảng user info
        $user_info = UserInfo::where('user_id',Auth::user()->id)->firstOrFail();
//        $user_info->full_name = $request->full_name;
//        $user_info->phone = $request->phone,
//        $user_info->address
        $user_info->update($request->except(['_token']));
        return redirect()->back();
    }
}
