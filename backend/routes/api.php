<?php

// use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\API\AuthController;
// use App\Http\Controllers\API\AdminController;

// Route::post('user/register',[AuthController::class,'register']);
// Route::post('user/login',[AuthController::class,'login']);

// Route::middleware(['jwt.auth'])->group(function(){
//     Route::get('admin/users',[AdminController::class,'users'])->middleware('role:admin');
// });
// use App\Http\Controllers\UserController;
// use App\Http\Controllers\AdminController;

// Route::post('/user/register', [UserController::class, 'register']);
// Route::post('/user/login', [UserController::class, 'login']);

// Route::middleware(['jwt.verify'])->group(function () {
//     Route::get('/admin/users', [AdminController::class, 'getAllUsers']);
// });


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\AdminController;

Route::post('/user/register', [UserController::class, 'register']);
Route::post('/user/login', [UserController::class, 'login']);

Route::middleware(['jwt.verify'])->group(function () {
    Route::get('/admin/users', [AdminController::class, 'getAllUsers']);
});

