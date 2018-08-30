<?php

namespace Modules\Restaurant\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Restaurant\Http\Requests\CreateRestaurantRequest;

class RestaurantController extends Controller
{
    public function index()
    {
        return 'hihi';
    }
    public function createRestaurant()
    {
        return view('restaurant::create');
    }
    public function storeRestaurant(CreateRestaurantRequest $request)
    {

    }
}
