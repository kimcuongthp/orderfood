<?php

namespace Modules\Restaurant\Entities;

use Illuminate\Database\Eloquent\Model;
use Dimsav\Translatable\Translatable;

class Typeoffood extends Model
{
    use Translatable;

    public $translatedAttributes = ['name'];
    protected $fillable = [];

    public function foods()
    {
        return $this->hasMany(Food::class);
    }
    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }
}
