<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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
    return ['Laravel' => app()->version()];
});

Route::resource("/api/book",BookController::class)->middleware(['auth', 'verified']);
Route::resource("/admin/user",UserController::class)->middleware(['auth', 'verified']);
require __DIR__.'/auth.php';

Route::get('/dashboard', function(){
    return Auth::user();
})->middleware(['auth', 'verified']);

Route::resource("/api/booking",BookingController::class)->middleware(['auth', 'verified']);
