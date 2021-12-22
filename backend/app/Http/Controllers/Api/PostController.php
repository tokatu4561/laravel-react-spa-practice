<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //
    public function getPostList () {
        $posts = Post::all();
        return response()->json($posts, 200);
    }
}
