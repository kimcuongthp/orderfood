<?php
/**
 * Created by PhpStorm.
 * User: Tran Vuong
 * Date: 9/6/2018
 * Time: 9:02 AM
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $fillable = [
        'order_id','food_id', 'name', 'quality','price'
    ];
    public function order_option_detail(){
        return $this->hasMany(OrderOptionDetail::class);
    }
}