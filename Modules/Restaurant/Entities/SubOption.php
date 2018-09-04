<?php

namespace Modules\Restaurant\Entities;

use Illuminate\Database\Eloquent\Model;
use Dimsav\Translatable\Translatable;

class SubOption extends Model
{
    use Translatable;

    public $translatedAttributes = [
        'name'
    ];
    protected $fillable = [
        'food_option_id',
        'price'
    ];
}
