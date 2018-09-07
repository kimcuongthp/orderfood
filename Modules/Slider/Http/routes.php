<?php

Route::group(['middleware' => ['web','auth'], 'prefix' => 'backend/slider', 'namespace' => 'Modules\Slider\Http\Controllers'], function()
{
    Route::get('', 'SliderController@index')->name('slide');
    Route::post('','SliderController@store')->name('slide.store');
    Route::post('order','SliderController@order')->name('slide.order');
    Route::bind('slide_id', function($id){
        return \Modules\Slider\Entities\Slide::findOrFail($id);
    });
    Route::post('{slide_id}/delete', [
        'as' => 'slide.delete',
        'uses' => 'SliderController@destroy'
    ]);
});
