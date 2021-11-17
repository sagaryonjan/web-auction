<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redis;
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

    Redis::publish('product-channel', json_encode([
        'user_id' => 1,
        'product_id' => 5
    ]));
    //return Redis::delete('name');
    return view('welcome');
});
