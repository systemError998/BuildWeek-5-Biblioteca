<?php

namespace Database\Factories;

use App\Models\Author;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $copieTotali = rand(1,10);
        $copieDisponibili = rand(0, $copieTotali);
        return [
           'title'=>fake()->text(20),
           'year'=>fake()->year(),
           'total_copies'=>$copieTotali,
           'available_copies'=>$copieDisponibili,
           'author_id'=>Author::get()->random()->id,
           'category_id'=>Category::get()->random()->id,
           "abstract"=>fake()->text(200),

        ];
    }
}
