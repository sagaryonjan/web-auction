<?php

namespace App\Http\Resources;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{

    protected $users = [];

    public function setUsers($users){
        $this->users = $users;
        return $this;
    }

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'start_price' => $this->start_price,
            'bid_price' => $this->bid_price,
            'auto_bid_user' => $this->auto_bid_user,
            'current_biding' => $this->current_biding,
            'current_biding_user' => $this->user_id,
            'description' => $this->description,
            'end_date' => $this->end_date->format('F d, Y h:i a'),
            'end_date_timestamp' => $this->end_date->getTimestampMs(),
            'image' => asset('storage/'. $this->image),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'user' => Arr::first($this->users, fn ($value, $key) => $value['id'] === $this->user_id),
        ];
    }

    public static function collection($resource){
        return new ProductResourceCollection($resource);
    }
}