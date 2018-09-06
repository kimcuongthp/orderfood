<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['prefix' => LaravelLocalization::setLocale()], function(){
    #Route đăng nhập
    Route::post('login', [
        'as' => 'user.login',
        'uses' => 'LoginController@doLogin'
    ]);
    Route::get('userinfo', [
        'as' => 'user.info',
        'uses' => 'UserController@index',
        'middleware' => 'auth'
    ]);
    Route::post('userinfo', [
        'as' => 'update.user.info',
        'uses' => 'UserController@update',
        'middleware' => 'auth'
    ]);

    Route::get('', [
        'as' => 'home',
        'uses' => 'HomeController@index'
    ]);
    Route::get('restaurant/{id?}', [
        'as' => 'restaurant',
        'uses' => 'RestaurantController@index'
    ]);
    Route::get('search', [
        'as' => 'restaurant.search',
        'uses' => 'SearchController@index'
    ]);
	Route::post('restaurant/rate', [
		'as' => 'restaurant.rate',
		'uses' => 'RestaurantController@rate'
	]);
    Route::get('/restaurant/food/option/{id}', [
        'as' => 'restaurant.food_option',
        'uses' => 'RestaurantController@option'
    ]);
    Route::post('/restaurant/food/order-item', [
        'as' => 'restaurant.order_item',
        'uses' => 'RestaurantController@orderItem'
    ]);
});


Route::get('/backend/media_alone', function(){
    return view('media::media');
})->middleware('auth');





//Route::get('set', function(){
//
//    #Tìm role staff
//    $role = \Spatie\Permission\Models\Role::find(1);
//
//    #Tìm role agency
//    //$role = \Spatie\Permission\Models\Role::find(3);
//
//    #Tìm role customer
//    //$role = \Spatie\Permission\Models\Role::find(2);
//
//    #Tạo permission
//    $permission = \Spatie\Permission\Models\Permission::firstOrCreate(['name' => 'manager_restaurant_categories']);
//
//    #Gán permission cho role
//    $permission->assignRole($role);
//});
