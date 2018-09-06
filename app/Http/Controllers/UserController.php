<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePassword;
use App\Http\Requests\UpdateUserInfo;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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
        $user_info->update($request->except(['_token']));
        return redirect()->back()->with('message', 'Cập nhật thông tin thành công!');
    }

    public function changePassword()
    {
        $cities = City::all();
        return view('frontend.change_password', compact('cities'));
    }
    public function doChangePassword(ChangePassword $request)
    {
        #check mật khẩu cũ
        $current_password = Auth::user()->password;
        if(Hash::check($request->oldpass, $current_password)) {
            $user_id = Auth::user()->id;
            $obj_user = User::find($user_id);
            $obj_user->password = Hash::make($request->newpass);
            $obj_user->save();
            return redirect()->back()->with('message','Đổi mật khẩu thành công!');
        }
        else
        {
            return redirect()->back()->withErrors(['oldpass' => 'Mật khẩu cũ không đúng!']);
        }
    }

    public function doLogout()
    {
        if(Auth::check())
        {
            Auth::logout();
            return redirect()->route('home');
        }
    }
}
