<?php

namespace App\Http\Controllers;

use App\FavoriteRestaurant;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Modules\Address\Entities\City;

class FavoriteController extends Controller
{
    public function favorite(Request $request)
    {
        if($request->action && $request->id)
        {
            #Check action
            if($request->action === 'add-favorite')
            {
                FavoriteRestaurant::updateOrCreate([
                    'user_id' => Auth::user()->id,
                    'restaurant_id' => $request->id
                ]);
                return response()->json([
                    'status' => 'success',
                    'type' => 1
                ]);
            }
            elseif($request->action === 'remove-favorite')
            {
                $fav = FavoriteRestaurant::where('user_id', Auth::user()->id)->where('restaurant_id',$request->id)->firstOrFail();
                $fav->delete();
                return response()->json([
                    'status' => 'success',
                    'type' => 2
                ]);
            }
            else {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Có lỗi xảy ra, thử lại sau!'
                ]);
            }
        }
    }

    public function view_favorite(){
        $cities = City::all();
        $user = User::find(Auth::user()->id);
        $restaurants = $user->favorited_restaurants()->paginate(8);
        return view('frontend.favorite', compact('cities','user','restaurants'));
    }
}
