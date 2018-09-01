<?php
Route::group(['prefix' => LaravelLocalization::setLocale()], function() {
    Route::group(['middleware' => ['web', 'auth'], 'prefix' => 'backend/restaurant', 'namespace' => 'Modules\Restaurant\Http\Controllers'], function () {

        #Route Nhà hàng
        Route::get('/', [
            'as' => 'restaurant.index',
            'uses' => 'RestaurantController@index',
            'middleware' => 'can:view_all_restaurant'
        ]);
        Route::get('/create', [
            'as' => 'restaurant.create',
            'uses' => 'RestaurantController@createRestaurant',
            'middleware' => 'can:create_restaurant'
        ]);
        Route::post('/create', [
            'as' => 'restaurant.store',
            'uses' => 'RestaurantController@storeRestaurant',
            'middleware' => 'can:create_restaurant'
        ]);

        Route::bind('restaurant_id', function ($id) {
            return \Modules\Restaurant\Entities\Restaurant::findOrFail($id);
        });
        Route::get('/{restaurant_id}/edit', [
            'as' => 'restaurant.edit',
            'uses' => 'RestaurantController@editRestaurant'
        ]);
        Route::post('/{restaurant_id}/update', [
           'as' => 'restaurant.update',
           'uses' => 'RestaurantController@updateRestaurant'
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

        # Router danh mục món ăn
        Route::group(['prefix' => 'typeoffoods'], function(){
            Route::get('/', [
                'as' => 'typeoffood.index',
                'uses' => 'TypeOfFoodController@index'
            ]);
            Route::get('/typeoffood/modal/{id}', [
                'as' => 'typeoffood.modal',
                'uses' => 'TypeOfFoodController@modal'
            ]);
            Route::post('/typeoffood/update', [
                'as' => 'typeoffood.update',
                'uses' => 'TypeOfFoodController@update'
            ]);
            Route::post('/typeoffood/delete/{id}', [
                'as' => 'typeoffood.delete',
                'uses' => 'TypeOfFoodController@delete'
            ]);
        });

        #Router mon an
        Route::group(['prefix' => 'foods'], function(){
            Route::get('/{res_id}/{type_id}', [
                'as' => 'foods.index',
                'uses' => 'FoodsController@index'
            ])->where(['res_id'=> '[0-9]+','type_id'=>'[0-9]+']);

            Route::get('/add/{res_id}', [
                'uses' => 'FoodsController@show'
            ])->where(['res_id'=> '[0-9]+']);

            Route::get('/update/{res_id}/{id}', [
                'uses' => 'FoodsController@show'
            ])->where(['res_id'=> '[0-9]+','id'=>'[0-9]+']);;

            Route::post('/update', [
                'as'=>'foods.update',
                'uses' => 'FoodsController@update'
            ]);
            Route::post('/delete', [
                'as'=>'foods.delete',
                'uses' => 'FoodsController@delete'
            ]);

            Route::post('/changeStatus', [
                'as'=>'foods.delete',
                'uses' => 'FoodsController@changestatus'
            ]);
        });
    });
});