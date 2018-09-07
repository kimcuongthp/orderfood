<?php
/**
 * Created by PhpStorm.
 * User: Tran Vuong
 * Date: 9/7/2018
 * Time: 11:31 AM
 */

namespace App;


use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    use Translatable;
    public $translatedAttributes = ['name'];
    protected $fillable = [];
}