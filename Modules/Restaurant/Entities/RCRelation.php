<?php

namespace Modules\Restaurant\Entities;

use Illuminate\Database\Eloquent\Model;

class RCRelation extends Model
{
    protected $table = 'restaurant_categories_relation';
    protected $fillable = [
        'restaurant_id',
        'category_id'
    ];
}
