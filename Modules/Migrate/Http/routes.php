<?php

Route::group(['middleware' => 'web', 'prefix' => 'migrate', 'namespace' => 'Modules\Migrate\Http\Controllers'], function()
{
    Route::get('/', 'MigrateController@index');
});
