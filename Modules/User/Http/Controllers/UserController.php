<?php

namespace Modules\User\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function showLogin()
    {
        return view('user::login');
    }
    public function doLogin(Request $request)
    {
        if(Auth::attempt(['name' => $request->name, 'password' => $request->password], true))
        {
            return response()->json([
                'login_status' => 'success',
                'message' => trans('user::login.success')
            ]);
        }
        else {
            return response()->json([
                'login_status' => 'error',
                'message' => trans('user::login.error')
            ]);
       }
    }
    public function showDashboard()
    {
        return view('backend.dashboard');
    }

    public function createRole()
    {
        $role = Role::firstOrCreate([
            'name' => 'Staff'
        ]);
        //Auth::user()->assignRole('Staff');

        $permission = Permission::create(['name' => 'media manager']);
        $role->givePermissionTo($permission);
//        dd($role);

    }
}
