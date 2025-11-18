<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    // REGISTER CUSTOMER or PARTNER
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
           'name' => 'required|string|max:80',
           'email' => 'required|email|unique:users',
           'password' => 'required|min:6',
           'role' => 'required|in:partner,customer'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::create([
            'name'=> $request->name,
            'email'=> strtolower($request->email),
            'password'=> Hash::make($request->password),
            'role'=> $request->role
        ]);

        return response()->json(['message'=>'User Registered Successfully'], 201);
    }


    // LOGIN ANY USER (Admin, Partner, Customer)
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(["message"=>"Invalid Credentials"], 401);
        }

        $user = auth()->user();

        return response()->json([
            "message" => "Login Success",
            "token" => $token,
            "user" => $user
        ]);
    }
}
