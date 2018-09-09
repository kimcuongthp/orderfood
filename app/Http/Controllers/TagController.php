<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Restaurant\Entities\Restaurant;
use Modules\Restaurant\Entities\Tag;

class TagController extends Controller
{
    public function showTag($slug)
    {
        $tag = Tag::with('tags')->where('slug',$slug)->firstOrFail();
        $restaurants = Restaurant::whereHas('tags', function ($q) use ($tag) {
           $q->where('tag_id',$tag->id);
        })->paginate(8);
        return view('frontend.tag',compact('restaurants','tag'));
    }
}
