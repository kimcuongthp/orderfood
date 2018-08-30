<?php

namespace Modules\Restaurant\Entities;

use Illuminate\Database\Eloquent\Model;
use Dimsav\Translatable\Translatable;

class Restaurant extends Model
{
    use Translatable;
    public $translatedAttributes = [
        'name',
        'description',
        'address'
    ];
    protected $fillable = [
        'phone',
        'email',
        'status',
        'image',
        'video',
        'time_open',
        'time_close',
        'is_open',
        'price_min',
        'price_max',
        'trans_fee',
        'district_id',
        'city_id',
        'user_id'
    ];
}
