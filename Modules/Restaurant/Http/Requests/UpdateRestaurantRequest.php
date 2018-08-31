<?php

namespace Modules\Restaurant\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRestaurantRequest extends FormRequest
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
            'email' => 'email|nullable',
            'price_min' => 'nullable|numeric',
            'price_max' => 'nullable|numeric',
            'trans_fee' => 'nullable|numeric',
            'vi_name' => 'required',
        ];

        return $rules;
    }

    public function messages()
    {
        return [
            'city_id.required' => 'Vui lòng chọn tỉnh thành',
            'email.email' => 'Email không hợp lệ',
            'price_min.numeric' => 'Trường giá thấp nhất phải là số',
            'price_max.numeric' => 'Trường giá cao nhất phải là số',
            'trans_fee.numeric' => 'Trường phí vận chuyển phải là số',
            'vi_name.required' => 'Điền tên nhà hàng ngôn ngữ Tiếng Việt'
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
