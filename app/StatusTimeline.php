<?php
/**
 * Created by PhpStorm.
 * User: Tran Vuong
 * Date: 9/7/2018
 * Time: 3:22 PM
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class StatusTimeline extends  Model
{
    protected $fillable = [
        'status_id', 'order_id'
    ];
}