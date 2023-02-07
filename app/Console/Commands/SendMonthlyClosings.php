<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\Cuscatlan\CronClosing;
use App\Models\Cuscatlan\TrakingCuscaMonthYearAction;

class SendMonthlyClosings extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:monthlyClosing';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Cron job de cierres mensuales Plan Cuscatlan';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $cron_closing = CronClosing::all();
        $current_date = date('Y-m-d');

        foreach ($cron_closing as $closing){
            if($closing->cron_date == $current_date){

                $trackings = TrakingCuscaMonthYearAction::all();
                dd($trackings);

            }else{
                return "La fecha del cierre aún no coincide con la fecha actual.";
            }
        }
    }
}
