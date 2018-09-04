<?php

namespace Modules\Restaurant\Entities;

use Illuminate\Database\Eloquent\Model;
use Dimsav\Translatable\Translatable;

class FoodOptionTranslation extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'name','note'
    ];
}
