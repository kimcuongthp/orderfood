<?php
/**
 * Created by PhpStorm.
 * User: Tran Vuong
 * Date: 9/5/2018
 * Time: 7:58 AM
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Rates extends Model
{
    protected $fillable = [
        'restaurant_id', 'user_id', 'star','message'
    ];
}