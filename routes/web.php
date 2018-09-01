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

Route::get('/', function () {
    return view('welcome');
});

Route::get('set', function(){

    #Tìm role staff
   // $role = \Spatie\Permission\Models\Role::find(1);

    #Tìm role agency
    $role = \Spatie\Permission\Models\Role::find(3);

    #Tìm role customer
    //$role = \Spatie\Permission\Models\Role::find(2);

    #Tạo permission
    $permission = \Spatie\Permission\Models\Permission::firstOrCreate(['name' => 'edit_restaurant']);

    #Gán permission cho role
    $permission->assignRole($role);
});
