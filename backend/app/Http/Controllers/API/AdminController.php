<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    public function getAllUsers()
    {
        return User::select("id", "name", "email", "role", "created_at")->get();
    }
}
