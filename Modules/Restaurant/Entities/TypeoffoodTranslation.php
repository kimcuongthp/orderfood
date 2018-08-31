<?php

namespace Modules\Restaurant\Entities;

use Illuminate\Database\Eloquent\Model;

class TypeoffoodTranslation extends Model
{
    public $timestamps = false;
    protected $fillable = ['name'];
}
