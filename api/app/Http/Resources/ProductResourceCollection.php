<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductResourceCollection extends ResourceCollection {

  protected $users;

  public function setUsers($users){
      $this->users = $users;
      return $this;
  }

  public function toArray($request){
    return $this->collection->each->setUsers($this->users)->map->toArray($request)->all();
  }
}
