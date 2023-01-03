<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cuscatlan\AxisCusca;
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

        $axis = [];
        $axis_title = "";

        if ($request->axis_description == "TODOS") {
            $axis = AxisCusca::all();
            // dd($axis);
            $axis_title = "Avance por ejes";
            $axis_per = 100;
        } else {
            // $axis = AxisCusca::where('axis_description', $request->axis_description)->get();
            $axis = DB::table('axis_cusca as ac')
                ->select(
                    'ac.*',
                    'po.*',
                    'sc.*',
                    'rc.*',
                    'rc.id as results_id',
                    'act.*'
                )
                ->join('programmatic_objectives as po', 'po.axis_cusca_id', '=', 'ac.id')
                ->join('strategy_cusca as sc', 'sc.programmatic_objectives_id', '=', 'po.id')
                ->join('results_cusca as rc', 'rc.strategy_cusca_id', '=', 'sc.id')
                ->join('actions_cusca as act', 'act.results_cusca_id', '=', 'rc.id')
                ->where('axis_description', $request->axis_description)
                ->get();

            // dd($axis->toArray());

            $axis_per = 100;
            $axis_title = $request->axis_description;
        }


        $pdf = DomPDF::loadView("cuscatlan.PDF.report", compact("data", "axis", "axis_title", "axis_per"))
            ->setPaper("a4", "landscape");

        return $pdf->stream("report-" . now() . ".pdf");
    }
}
