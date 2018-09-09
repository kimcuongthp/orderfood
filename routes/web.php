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

    #Route tag
    Route::get('tags/{slug}', [
        'as' => 'show.tag',
        'uses' => 'TagController@showTag'
    ]);

    #Route favorite restaurant
    Route::get('favorite', [
        'as' => 'show.favorite',
        'uses' => 'FavoriteController@view_favorite',
        'middleware' => 'auth'
    ]);
    Route::post('favorite', [
        'as' => 'favorite',
        'uses' => 'FavoriteController@favorite',
        'middleware' => 'auth'
    ]);

    #Route đổi mật khẩu
    Route::get('change-password', [
        'as' => 'user.change_password',
        'uses' => 'UserController@changePassword',
        'middleware' => 'auth'
    ]);
    Route::post('change-password', [
        'as' => 'user.do_change_password',
        'uses' => 'UserController@doChangePassword',
        'middleware' => 'auth'
    ]);

    Route::post('logout', [
        'as' => 'user.logout',
        'uses' => 'UserController@doLogout',
        'middleware' => 'auth'
    ]);

    Route::get('', [
        'as' => 'home',
        'uses' => 'HomeController@index'
    ]);

    #Trang lọc nhà hàng
    Route::get('/restaurants', [
        'as' => 'restaurant.all',
        'uses' => 'FilterController@index'
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
        'uses' => 'RestaurantController@orderItemModal'
    ]);
    Route::post('/restaurant/food/order-item-no-modal', [
        'uses' => 'RestaurantController@orderItemNoModal'
    ]);
    Route::post('/restaurant/food/order-detail', [
        'uses' => 'RestaurantController@orderDetail'
    ]);
    Route::post('/restaurant/food/item-minus', [
        'uses' => 'RestaurantController@itemMinus'
    ]);
    Route::post('/restaurant/food/item-plus', [
        'uses' => 'RestaurantController@itemPlus'
    ]);
    Route::post('/restaurant/food/order-reset', [
        'uses' => 'RestaurantController@orderReset'
    ]);
    Route::get('/restaurant/food/order-detail-modal', [
        'uses' => 'RestaurantController@OrderDetailModal'
    ]);

    Route::post('/check-user-info', [
        'uses' => 'RestaurantController@CheckInfoUser'
    ]);
    Route::post('/restaurant/order_now', [
        'uses' => 'RestaurantController@OrderNow'
    ]);
    Route::get('/order-history', [
        'uses' => 'OrderHistoryController@history'
    ]);
    Route::get('/order-history/modal', [
        'uses' => 'OrderHistoryController@ModalHistory'
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
