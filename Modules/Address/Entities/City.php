<?php

namespace Modules\Address\Entities;

use Illuminate\Database\Eloquent\Model;
use \Dimsav\Translatable\Translatable;
use Kalnoy\Nestedset\NodeTrait;

class City extends Model
{
    use Translatable, NodeTrait;

    public $translatedAttributes = ['name'];
    protected $fillable = ['name'];
}
