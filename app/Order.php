<?php
/**
 * Created by PhpStorm.
 * User: Tran Vuong
 * Date: 9/6/2018
 * Time: 9:00 AM
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'restaurant_id', 'user_id', 'price','trans_fee','sum_price','status'
    ];
}