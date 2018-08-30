<?php
Route::group(['prefix' => LaravelLocalization::setLocale()], function() {
    Route::group(['middleware' => ['web', 'auth', 'role:Staff'], 'prefix' => 'backend/restaurant', 'namespace' => 'Modules\Restaurant\Http\Controllers'], function () {
        Route::get('/', [
            'as' => 'restaurant.index',
            'uses' => 'RestaurantController@index'
        ]);
        Route::get('/create', [
            'as' => 'restaurant.create',
            'uses' => 'RestaurantController@createRestaurant'
        ]);
        Route::post('/create', [
            'as' => 'restaurant.store',
            'uses' => 'RestaurantController@storeRestaurant'
        ]);
    });
});
