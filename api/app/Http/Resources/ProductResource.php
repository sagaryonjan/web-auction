<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
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
            'description' => $this->description,
            'end_date' => $this->end_date->format('F d, Y h:i a'),
            'end_date_timestamp' => $this->end_date->getTimestampMs(),
            'image' => asset('storage/'. $this->image),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}