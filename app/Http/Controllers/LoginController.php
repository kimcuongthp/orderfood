<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Modules\User\Entities\UserInfo;

class LoginController extends Controller
{
    public function doLogin(Request $request)
    {
        $rs = [
            'status' => 'error',
            'message' => 'Lỗi không xác định'
        ];

        #Kiểm tra đủ thông đăng nhập chưa
        if(!$request->email || !$request->password)
        {
            $rs['message'] = 'Vui lòng nhập đủ thông tin';
            return $rs;
        }

        $email = collect();
        $email->email = '';

        #Kiểm tra số điện thoại
        if(!strpos($request->email, '@'))
        {
            $user_id = UserInfo::where('phone', $request->email)->pluck('user_id')->toArray();
            if($user_id)
            {
                $email = User::find($user_id)->first();
            }
            else
            {
                $rs['message'] = 'Số điện thoại không tồn tại';
                return $rs;
            }
        }

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password],true)
            || Auth::attempt(['email' => $email->email, 'password' => $request->password],true)
        )
        {
            $rs['status'] = 'success';
            $rs['message'] = 'Đăng nhập thành công!';
        }
        else
        {
            $rs['message'] = 'Thông tin đăng nhập không đúng vui lòng thử lại!';
        }
        return $rs;

    }
}
