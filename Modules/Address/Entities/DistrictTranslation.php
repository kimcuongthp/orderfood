<?php

namespace Modules\Address\Entities;

use Illuminate\Database\Eloquent\Model;

class DistrictTranslation extends Model
{
    public $timestamps = false;

    protected $fillable = ['name'];
}
