<?php

namespace Modules\Restaurant\Entities;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Dimsav\Translatable\Translatable;
use Modules\Address\Entities\City;

class Restaurant extends Model
{
    use Translatable;
    public $translatedAttributes = [
        'name',
        'description',
        'address',
        'alert',
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
        'trans_fee',
        'district_id',
        'city_id',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function categories()
    {
        return $this->belongsToMany(Category::class,'restaurant_categories_relation','restaurant_id');
    }
    public function typeoffood(){
        return $this->hasMany(Typeoffood::class);
    }

    public function city(){

        return $this->belongsTo(City::class);
    }
}
