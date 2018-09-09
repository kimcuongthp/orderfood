<?php

namespace Modules\Restaurant\Entities;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use Sluggable;
    protected $table = 'tags';
    protected $fillable = ['name'];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
    public function tags()
    {
        return $this->hasMany(TagTranslation::class);
    }
}
