<?php

namespace Modules\User\Entities;

use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    protected $table = 'user_info';
    protected $fillable = [
        'user_id',
        'facebook_id',
        'full_name',
        'phone',
        'address',
        'image'
    ];
}
