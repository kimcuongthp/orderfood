<?php

Route::group(['prefix' => LaravelLocalization::setLocale()], function(){
    Route::group(['middleware' => ['web', 'auth'], 'prefix' => 'backend/address', 'namespace' => 'Modules\Address\Http\Controllers'], function () {
        Route::get('/', [
            'as' => 'address.index',
            'uses' => 'AddressController@index'
        ]);
        Route::post('/store', [
            'as' => 'address.store',
            'uses' => 'AddressController@store'
        ]);
        Route::post('/order', [
            'as' => 'address.city.order',
            'uses' => 'AddressController@order'
        ]);

        #Route cho thành phố
        Route::bind('city', function ($id) {
            return \Modules\Address\Entities\City::findOrFail($id);
        });
        Route::get('/cities/{city}/edit', [
            'as' => 'address.city.edit',
            'uses' => 'AddressController@editCity'
        ]);
        Route::post('/cities/{city}/update',[
            'as' => 'address.city.update',
            'uses' => 'AddressController@updateCity'
        ]);
        Route::get('cities/all', [
            'as' => 'address.city.all',
            'uses' => 'AddressController@loadAllCity'
        ]);
        Route::post('cities/{city}/delete', [
            'as' => 'address.city.delete',
            'uses' => 'AddressController@deleteCity'
        ]);

        #Route cho quận huyện
        Route::bind('district', function ($id) {
           return \Modules\Address\Entities\District::findOrFail($id);
        });
        Route::get('districts/{district}/edit', [
            'as' => 'address.district.edit',
            'uses' => 'AddressController@editDistrict'
        ]);
        Route::post('districts/{district}/update', [
            'as' => 'address.district.update',
            'uses' => 'AddressController@updateDistrict'
        ]);
        Route::post('districts/{district}/delete', [
            'as' => 'address.district.delete',
            'uses' => 'AddressController@deleteDistrict'
        ]);
    });
});

