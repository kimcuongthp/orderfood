<?php

namespace Modules\Address\Entities;

use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    use Translatable;

    public $translatedAttributes = ['name'];

    protected $fillable = ['city_id','name'];

    public function city()
    {
        return $this->belongsTo(City::class);
    }
}
