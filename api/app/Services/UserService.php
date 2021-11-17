<?php

namespace App\Services;

class UserService
{
  public function getUsers() {
    return [
      [
        'id' => 1,
        'username' => 'user1',
        'email' => 'user1@user.com',
        'password' => 'user123',
        'type' => 'user',
      ],
      [
        'id' => 2,
        'username' => 'user2',
        'email' => 'user2@user.com',
        'password' => 'user123',
        'type' => 'user',
      ],
      [
        'id' => 3,
        'username' => 'user3',
        'email' => 'user3@user.com',
        'password' => 'user123',
        'type' => 'user',
      ],
      [
        'id' => 4,
        'username' => 'user4',
        'email' => 'user4bot@user.com',
        'password' => 'user123',
        'type' => 'bot',
      ],
    ];
  }
}