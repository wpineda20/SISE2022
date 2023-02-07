<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cuscatlan\CronClosing;

class CronClosingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
          CronClosing::insert([
            [
                'id' => 1,
                'cron_date' => now(),
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
