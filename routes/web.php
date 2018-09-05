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
    Route::get('/', [
        'as' => 'home',
        'uses' => 'HomeController@index'
    ]);
    Route::get('/restaurant/{id?}', [
        'as' => 'restaurant',
        'uses' => 'RestaurantController@index'
    ]);
	Route::post('/restaurant/rate', [
		'as' => 'restaurant.rate',
		'uses' => 'RestaurantController@rate'
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
