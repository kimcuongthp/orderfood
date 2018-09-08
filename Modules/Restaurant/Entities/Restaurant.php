<?php

namespace Modules\Restaurant\Entities;

use App\User;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Dimsav\Translatable\Translatable;
use Modules\Address\Entities\City;

class Restaurant extends Model
{
    use Translatable, Sluggable;

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public $translatedAttributes = [
        'name',
        'description',
        'address',
        'alert',
    ];
    protected $fillable = [
        'phone',
        'email',
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

    public static function getCategoriesOfRestaurants($restaurants){
        $categories = [];
        foreach($restaurants as $restaurant){
            array_push( $categories, $restaurant->categories->pluck('id')->toArray());
        }
        return Category::WhereIn('id', array_unique($categories))->get();
    }
}
