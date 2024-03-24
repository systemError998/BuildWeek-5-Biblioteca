<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::resource("/book",BookController::class); */
Route::resource("/author",AuthorController::class);
Route::resource("/category",CategoryController::class);
Route::resource("/booking",BookingController::class);




Route::get('/user', function (Request $request) {
    return "api/user";

    /* return $request->user(); */
});
