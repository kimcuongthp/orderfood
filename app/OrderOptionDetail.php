<?php
/**
 * Created by PhpStorm.
 * User: Tran Vuong
 * Date: 9/6/2018
 * Time: 9:03 AM
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class OrderOptionDetail extends Model
{
    protected $fillable = [
        'order_detail_id', 'option_id','option_name','sub_option_id','sub_option_name','quality','price'
    ];
}