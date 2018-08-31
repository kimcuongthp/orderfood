<?php

namespace Modules\Restaurant\Entities;

use Illuminate\Database\Eloquent\Model;
use Dimsav\Translatable\Translatable;

class FoodTranslation extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'name',
        'description1',
        'description2'
    ];
}
