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
            'uses' => 'RestaurantController@editRestaurant',
            'middleware' => 'can:edit_restaurant'
        ]);
        Route::post('/{restaurant_id}/update', [
           'as' => 'restaurant.update',
           'uses' => 'RestaurantController@updateRestaurant',
            'middleware' => 'can:edit_restaurant'
        ]);

        #Route danh mục nhà hàng
        Route::group(['middleware' => 'can:manager_restaurant_categories', 'prefix' => 'categories'], function(){
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

        #Router món ăn
        Route::group(['prefix' => 'foods'], function(){
            Route::get('/{res_id}', [
                'as' => 'foods.index',
                'uses' => 'FoodsController@index'
            ])->where(['res_id'=> '[0-9]+','type_id'=>'[0-9]+']);

            Route::get('/add/{res_id}', [
                'uses' => 'FoodsController@show'
            ])->where(['res_id'=> '[0-9]+']);

            Route::get('/update/{res_id}/{id}', [
                'uses' => 'FoodsController@show'
            ])->where(['res_id'=> '[0-9]+','id'=>'[0-9]+']);;

            Route::any('/updatex', [
                'as'=>'foods.update',
                'uses' => 'FoodsController@update'
            ]);

            Route::post('/delete', [
                'as'=>'foods.delete',
                'uses' => 'FoodsController@delete'
            ]);

            Route::post('/changeStatus', [
                'uses' => 'FoodsController@changestatus'
            ]);
        });

        #Router don hang
        Route::group(['prefix' => 'order'], function(){
            Route::get('/', [
                'as'=>'order.index',
                'uses' => 'OrderController@index'
            ]);
            Route::get('/detai', [
                'as'=>'order.detail',
                'uses' => 'OrderController@detail'
            ]);
            Route::get('/destroy', [
                'as'=>'order.destroy',
                'uses' => 'OrderController@destroy'
            ]);
            Route::post('/ondestroy', [
                'as'=>'order.ondestroy',
                'uses' => 'OrderController@ondestroy'
            ]);

            Route::get('/change', [
                'as'=>'order.change',
                'uses' => 'OrderController@changeStatus'
            ]);
            Route::post('/onchange', [
                'as'=>'order.onchange',
                'uses' => 'OrderController@onchangeStatus'
            ]);
        });

    });
});