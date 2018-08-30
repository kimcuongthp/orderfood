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
        $trans = [];
        foreach (LaravelLocalization::getSupportedLocales() as $locale => $language) {
            $trans = $trans + [
                    $locale . '_name' => 'required',
                ];
        }

        return $trans;
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
