<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->text(30),
            'start_price' => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 100),
            'bid_price' => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 100),
            'description' => $this->faker->text(300),
            'end_date' => now()->addDay(),
            'image' => $this->faker->image(storage_path('app/public'), 351, 360, null, false),
        ];
    }
}
