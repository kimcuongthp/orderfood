<?php

namespace Modules\Restaurant\Entities;

use Illuminate\Database\Eloquent\Model;
use Dimsav\Translatable\Translatable;

class FoodOption extends Model
{
    use Translatable;

    public $translatedAttributes = [
        'name','note'
    ];
    protected $fillable = [
        'food_id',
        'one_or_more'
    ];

    public function sub_options(){
        return $this->hasMany(SubOption::class);
    }
}
