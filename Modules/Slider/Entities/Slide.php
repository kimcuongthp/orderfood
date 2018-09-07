<?php

namespace Modules\Slider\Entities;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Slide extends Model
{
    use NodeTrait;
    protected $fillable = [
        'name',
        'image'
    ];
}
