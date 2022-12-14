<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use App\Models\Cuscatlan\OrganizationalUnit;

class OrganizationalUnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        OrganizationalUnit::insert([
             [
                'id' => 1,
                'ou_name' => 'Dirección General de Planificación y Desarrollo Institucional',
                'direction_id' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
             [
                'id' => 2,
                'ou_name' => 'Unidad de Informatica y Sistemas',
                'direction_id' => 2,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
        ]);
    }
}
