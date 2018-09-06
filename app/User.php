<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Modules\Restaurant\Entities\Restaurant;
use Modules\User\Entities\UserInfo;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function info()
    {
        return $this->hasOne(UserInfo::class);
    }

    public function favorited_restaurants()
    {
        return $this->belongsToMany(Restaurant::class,'favorite_restaurants','user_id');
    }
}
