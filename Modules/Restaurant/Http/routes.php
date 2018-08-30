<?php

Route::group(['middleware' => 'web', 'prefix' => 'restaurant', 'namespace' => 'Modules\Restaurant\Http\Controllers'], function()
{
    Route::get('/', 'RestaurantController@index');
});
