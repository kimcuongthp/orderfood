<?php

namespace Modules\Restaurant\Entities;

use Illuminate\Database\Eloquent\Model;
use Dimsav\Translatable\Translatable;

class Category extends Model
{
    use Translatable;

    public $translatedAttributes = ['name'];
    protected $fillable = [];

    public function restaurants()
    {
        return $this->belongsToMany(Restaurant::class,'restaurant_categories_relation', 'category_id');
    }
}
