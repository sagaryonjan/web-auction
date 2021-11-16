<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'start_price',
        'bid_price',
        'description',
        'end_date',
    ];

    protected $casts = [
        'end_date' => 'datetime:Y-m-d H:i:s'
    ];
}
