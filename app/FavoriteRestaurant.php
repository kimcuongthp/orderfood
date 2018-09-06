<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FavoriteRestaurant extends Model
{
    protected $fillable = ['user_id','restaurant_id'];
}
