<?php

namespace Modules\Restaurant\Entities;

use Illuminate\Database\Eloquent\Model;

class RestaurantTranslation extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'name',
        'description',
        'address',
        'alert'
    ];
}
