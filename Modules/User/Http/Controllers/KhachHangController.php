<?php

namespace Modules\User\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class KhachHangController extends Controller
{
    public function index()
    {
        $users = User::with('info')->get();
        return view('user::user', compact('users'));
    }

    public function edit(Request $request)
    {
        $user = User::findOrFail($request->user_id);
        return view('user::user.edit', compact('user'));
    }
}
