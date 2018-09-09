<?php

namespace Modules\Restaurant\Entities;

use Illuminate\Database\Eloquent\Model;

class TagTranslation extends Model
{
    public $timestamps = false;
    protected $table = 'tag_translation';
    protected $fillable = [
        'restaurant_id',
        'tag_id',
        'locale'
    ];
    public function tag()
    {
        return $this->belongsTo(Tag::class);
    }
}
