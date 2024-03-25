<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\FavoritesController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Auth\Events\Verified;
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

Route::resource("/api/book",BookController::class);
Route::resource("/admin/user",UserController::class);
Route::resource("/api/favorites",FavoritesController::class);
require __DIR__.'/auth.php';

Route::get('/dashboard', function(){
    return Auth::user();
});