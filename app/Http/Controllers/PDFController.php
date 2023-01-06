<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cuscatlan\AxisCusca;
use App\Models\Cuscatlan\Programmatic_Objective;
use App\Models\Cuscatlan\TrakingCuscaMonthYearAction;

use Barryvdh\DomPDF\Facade as DomPDF;
use DB;

class PDFController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generatePDF(Request $request)
    {
        set_time_limit(0);
        ini_set("memory_limit", "1024M");

        $data = $request->all();

        $axis_title = "";

        // Report All Axis
        if ($request->axis_description == "TODOS") {

            $axis_title = "Avance por ejes";

            $axis = AxisCusca::select('*')
                ->get();

            foreach ($axis as $key => $value) {
                $value->trackings = DB::table('programmatic_objectives as po')
                    ->select(
                        'po.*',
                        'sc.*',
                        'rc.*',
                        'act.id as actions_id',
                        'act.year_goal_actions'
                    )
                    ->join('strategy_cusca as sc', 'sc.programmatic_objectives_id', '=', 'po.id', 'left outer')
                    ->join('results_cusca as rc', 'rc.strategy_cusca_id', '=', 'sc.id', 'left outer')
                    ->join('actions_cusca as act', 'act.results_cusca_id', '=', 'rc.id', 'left outer')
                    ->where('po.axis_cusca_id', $value->id)
                    ->get();

                $value->sum_year_goals = 0;
                $value->sum_number_actions = 0;
                $value->total_advanced_per = 0;

                $value->sum_year_goals = $value->trackings->sum('year_goal_actions');

                foreach ($value->trackings as $key => $item) {

                    $item->details = TrakingCuscaMonthYearAction::select(
                        'number_actions',
                        'tracking_detail',
                        'year_id',
                        'y.year_name',
                    )

                        ->join('years as y', 'y.id', '=', 'year_id')
                        ->where('actions_cusca_id', $item->actions_id)
                        ->where('y.year_name', date('Y'))
                        ->get();

                    foreach ($item->details as $detail) {
                        $item->total_number_actions = 0;
                        $item->total_number_actions = $item->details->sum('number_actions');

                        $value->sum_number_actions = $value->trackings->sum('total_number_actions');
                    }
                }
                //Calculate Total Avanced Percentage
                $value->total_advanced_per = $value->sum_number_actions /  $value->sum_year_goals * 100;
            }

            // dd($axis);

            $pdf = DomPDF::loadView("cuscatlan.PDF.report", compact("data", "axis", "axis_title"))
                ->setPaper("a4", "landscape");

            return $pdf->stream("report-" . now() . ".pdf");
        }

        // Report by Axis
        $axis_title = $request->axis_description;

        $axis = AxisCusca::select(
            '*',
            'po.*',
            'sc.*',
            'rc.*',
            'rc.id as results_id',
            'act.id as actions_id',
            'act.action_description',
            'act.year_goal_actions'
        )
            ->join('programmatic_objectives as po', 'po.axis_cusca_id', '=', 'axis_cusca.id', 'left outer')
            ->join('strategy_cusca as sc', 'sc.programmatic_objectives_id', '=', 'po.id', 'left outer')
            ->join('results_cusca as rc', 'rc.strategy_cusca_id', '=', 'sc.id', 'left outer')
            ->join('actions_cusca as act', 'act.results_cusca_id', '=', 'rc.id', 'left outer')
            ->where('axis_cusca.axis_description', $request->axis_description)
            ->get();

        foreach ($axis as $key => $value) {

            $value->trackings = TrakingCuscaMonthYearAction::select(
                'number_actions',
                'month_id',
                'year_id',
                'tracking_detail',
                'actions_cusca_id',
                'y.year_name',
            )
                ->join('years as y', 'y.id', '=', 'year_id')
                ->where('actions_cusca_id', $value->actions_id)
                ->where('y.year_name', date('Y'))
                ->where('month_id', intval(date('n')))
                ->get();

            $goal = $value->year_goal_actions;

            foreach ($value->trackings as $key => $item) {

                $advance = $item->number_actions;

                $item->per_progress = $advance / $goal * 100;
            }
        }

        $pdf = DomPDF::loadView("cuscatlan.PDF.report", compact("data", "axis", "axis_title"))
            ->setPaper("a4", "landscape");

        return $pdf->stream("report-" . now() . ".pdf");
    }
}
