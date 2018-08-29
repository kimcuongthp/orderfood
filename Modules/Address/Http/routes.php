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
    });
});

