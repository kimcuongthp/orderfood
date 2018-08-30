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


Route::group(['prefix' => LaravelLocalization::setLocale()], function(){
    Route::group(['middleware' => ['web', 'auth'], 'prefix' => 'backend/category', 'namespace' => 'Modules\Restaurant\Http\Controllers'], function () {

        Route::get('/', [
            'as' => 'category.index',
            'uses' => 'CategoryController@index'
        ]);
        Route::get('/modal/{id}', [
            'as' => 'category.modal',
            'uses' => 'CategoryController@modal'
        ]);
        Route::post('/update', [
            'as' => 'category.update',
            'uses' => 'CategoryController@update'
        ]);
        Route::post('/delete/{id}', [
            'as' => 'category.delete',
            'uses' => 'CategoryController@delete'
        ]);

    });
});