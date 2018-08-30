<?php
Route::group(['prefix' => LaravelLocalization::setLocale()], function() {
    Route::group(['middleware' => ['web', 'auth', 'role:Staff'], 'prefix' => 'backend/restaurant', 'namespace' => 'Modules\Restaurant\Http\Controllers'], function () {

        #Route Nhà hàng
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

        #Route danh mục nhà hàng
        Route::group(['prefix' => 'categories'], function(){
            Route::get('/', [
                'as' => 'category.index',
                'uses' => 'CategoryController@index'
            ]);
            Route::get('/category/modal/{id}', [
                'as' => 'category.modal',
                'uses' => 'CategoryController@modal'
            ]);
            Route::post('/category/update', [
                'as' => 'category.update',
                'uses' => 'CategoryController@update'
            ]);
            Route::post('/category/delete/{id}', [
                'as' => 'category.delete',
                'uses' => 'CategoryController@delete'
            ]);
        });
    });
});