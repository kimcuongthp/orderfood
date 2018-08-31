<?php

#Route đăng nhập
Route::group(['middleware'=> 'web', 'prefix' => 'backend', 'namespace' => 'Modules\User\Http\Controllers'], function()
{
    Route::get('/login', [
        'as' => 'show.login',
        'uses' => 'UserController@showLogin'
    ]);
    Route::post('/login', [
        'as' => 'do.login',
        'uses' => 'UserController@doLogin'
    ]);
});

#Route dashboard
Route::group(['middleware'=> ['web','auth'], 'prefix' => 'backend', 'namespace' => 'Modules\User\Http\Controllers'], function()
{
    Route::get('/',[
        'as' => 'show.dashboard',
        'uses' => 'UserController@showDashboard'
    ]);
    Route::post('/logout', [
        'as' => 'do.logout',
        'uses' => 'UserController@doLogout'
    ]);

    #Tạo role và premission
//    Route::get('/role', [
//        'as' => 'create.role',
//        'uses' => 'UserController@createRole'
//    ]);
});
