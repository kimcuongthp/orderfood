<?php

namespace Modules\Restaurant\Entities;

use Illuminate\Database\Eloquent\Model;
use Dimsav\Translatable\Translatable;

class Food extends Model
{
    use Translatable;

    public $translatedAttributes = [
        'name',
        'description1',
        'description2'
    ];
    protected $fillable = [
        'typeoffood_id',
        'price',
        'image',
        'number_of_order',
        'status'
    ];

    public  function typeoffood_name(){
        return $this->fill(1);
    }

    public function typeoffood()
    {
        return $this->belongsTo(Typeoffood::class);
    }
}
