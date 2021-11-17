<?php

namespace App\Http\Controllers;

use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Services\UserService;

class LoginController extends Controller
{
    private $userService;

    public function __construct(
        UserService $userService
    ) {
        $this->userService = $userService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $users = $this->userService->getUsers();

        $user = Arr::first($users, function ($value, $key) use ($request) {
            return $value['email'] == $request->get('email') && $value['password'] == $request->get('password');
        });

        if($user) { return $user;}
        
        throw new \Exception('user not found.');
    }

    


}
