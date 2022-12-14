<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use App\Models\Cuscatlan\AxisCusca;

class AxisCuscaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        AxisCusca::insert([
            [
                'id' => 1,
                'axis_description' =>  'Descripción de Eje Uno',
                'executed' => 'SI',
                'institution_id'=> 1,
                'user_id' => 1,
                //'programmatic_objectives_id' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'id' => 2,
                'axis_description' =>  'Descripción de Eje dos',
                'executed' => 'NO',
                'institution_id'=> 2,
                'user_id' => 2,
                //'programmatic_objectives_id' => 2,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
        ]);
    }
}
