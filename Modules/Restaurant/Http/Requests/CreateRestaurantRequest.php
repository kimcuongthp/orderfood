<?php

namespace Modules\Restaurant\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class CreateRestaurantRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'city_id' => 'required',
            'username' => 'required|unique:users,name|regex:/^[A-Za-z0-9()\/-]+$/',
            'password' => 'required|min:6|regex:/^\S*$/',
            'email' => 'email|nullable',
            'price_min' => 'nullable|numeric',
            'price_max' => 'nullable|numeric',
            'trans_fee' => 'nullable|numeric',
            'vi_name' => 'required',
            'user_email' => 'required',
        ];

        return $rules;
    }

    public function messages()
    {
        return [
            'username.required' => 'Tài khoản là trường bắt buộc',
            'username.regex' => 'Tên tài khoản không hợp lệ',
            'username.unique' => 'Tên tài khoản đã tồn tại',
            'password.required' => 'Mật khẩu là trường bắt buộc',
            'password.regex' => 'Mật khẩu không được có khoảng trắng',
            'password.min' => 'Mật khẩu ít nhất có 6 kí tự trở lên',
            'city_id.required' => 'Vui lòng chọn tỉnh thành',
            'email.email' => 'Email không hợp lệ',
            'price_min.numeric' => 'Trường giá thấp nhất phải là số',
            'price_max.numeric' => 'Trường giá cao nhất phải là số',
            'trans_fee.numeric' => 'Trường phí vận chuyển phải là số',
            'vi_name.required' => 'Điền tên nhà hàng ngôn ngữ Tiếng Việt',
            'user_email.required' => 'Không được bỏ trống email cho tài khoản',
            ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
