<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//Models
use App\Models\Cuscatlan\AxisCusca;
use App\Models\Cuscatlan\ActionsCusca;
use App\Models\Cuscatlan\Month;
use App\Models\Cuscatlan\OrganizationalUnit;
use App\Models\Cuscatlan\Programmatic_Objective;
use App\Models\Cuscatlan\TrakingCuscaMonthYearAction;

//PDF
use Barryvdh\DomPDF\Facade as DomPDF;
use setasign\Fpdi\Tcpdf\Fpdi;
use DB;

class PDFController extends Controller
{


    /**
     * Generate Monthly PDF.
     *
     * @return \Illuminate\Http\Response
     */
    public function generateMensualPDF(Request $request)
    {

        set_time_limit(0);
        ini_set("memory_limit", "1024M");

        $project = "PlAN CUSCATLAN";
        $currentYear = date("Y");

        //Create new PDF
        $pdf = new FPDI();

        // Setting printing
        $pdf->setPrintHeader(false);
        $pdf->setPrintFooter(false);
        $pdf->setCellPaddings(0, 0, 0, 0);

        // set auto page breaks
        $pdf->SetAutoPageBreak(true, 8);

        $pdf->setSourceFile(public_path("ejecutivo_s.pdf"));
        $pdf->AddPage();

        // Set custom opacity
        $pdf->SetAlpha(0.1);
        //Path
        $img_file = public_path("Escudo_D.png");
        //Render the image
        $pdf->Image($img_file, 192, 115, 165, 165, '', '', '', false, 200, '', false, false, 0);
        // restore full opacity
        $pdf->SetAlpha(1);

        // set the starting point for the page content (z-index)
        $pdf->setPageMark();

        // First page
        $tplIdx = $pdf->importPage(1);
        $pdf->useTemplate($tplIdx, null, null, null, null, true);
        $pdf->setXY(0, 0);

        // Titles first page
        $pdf->SetTextColor(0, 0, 0);
        $pdf->setXY(73, 25);
        $pdf->setFontSize(13);
        $pdf->writeHTML("<b>Dirección General de Planificación y Desarrollo Institucional</b>");

        $pdf->setXY(93, 32);
        $pdf->setFontSize(13);
        $pdf->writeHTML("<b>Reporte de Seguimiento Mensual Año $currentYear</b>");

        $pdf->setFontSize(12);
        $pdf->setY(42);
        $pdf->Write(1, "$request->ou_name", '', '', 'C');
        $pdf->setY(48);
        $pdf->Write(1, "$request->month_name", '', '', 'C');

        $pdf->setY(60);
        $axis = AxisCusca::select(
            '*',
            'po.*',
            'sc.*',
            'rc.*',
            'rc.id as results_id',
            'y.year_name',
        )
            ->join('programmatic_objectives as po', 'po.axis_cusca_id', '=', 'axis_cusca.id', 'left outer')
            ->join('strategy_cusca as sc', 'sc.programmatic_objectives_id', '=', 'po.id', 'left outer')
            ->join('results_cusca as rc', 'rc.strategy_cusca_id', '=', 'sc.id', 'left outer')
            ->join('years as y', 'y.id', '=', 'rc.year_id')
            ->where('y.year_name', date('Y'))
            ->where('rc.organizational_units_id', OrganizationalUnit::where('ou_name', $request->ou_name)->first()?->id)
            ->get();

        foreach ($axis as $value) {

            $value->actions = ActionsCusca::where('results_cusca_id', $value->results_id)->get();

            foreach ($value->actions as $trackings) {

                $trackings->tracking = TrakingCuscaMonthYearAction::select(
                    '*',
                )
                    //Trackings by action
                    ->where('actions_cusca_id', $trackings->id)
                    //Trackings by request month
                    ->where('month_id', Month::where('month_name', $request->month_name)->first()?->id)
                    ->get();

                foreach ($trackings->tracking as $detail) {

                    //Validate if completed or not completed
                    $trackings->completed = ($detail->traking_status_id < 3) ? "NO" : "SI";
                    //Set Tracking detail
                    $trackings->tracking_detail = $detail->tracking_detail;
                    //Set Advanced Percentage
                    $trackings->number_actions = $detail->number_actions;
                }
            }
        }


        $rowsData = "";
        foreach ($axis as $value) {
            $rowsData .= '
             <tr>
               <td colspan="4" style="background-color:#B4C6E7;"><b>RESULTADO:</b> ' . $value->result_description . '</td>
            </tr>
            ';

            foreach ($value->actions as $item) {
                $rowsData .= '
                <tr>
                    <td colspan="4" style="background-color:#D6DCE4;"><b>ACCIÓN:</b> ' . $item->action_description . '</td>
                </tr>
                ';
                $rowsData .= '
                <tr>
                    <td class="fs-sm w-70"><b>INFORME DESCRIPTIVO</b></td>
                    <td class="fs-sm w-10"><b>COMPLETADO</b></td>
                    <td class="fs-sm w-10"><b>AVANCE MENSUAL</b></td>
                    <td class="fs-sm w-10"><b>PRESUPUESTO EJECUTADO</b></td>
                </tr>
                <tr>
                    <td class="w-70"> ' . $item->tracking_detail . '</td>
                    <td class="w-10" style="text-align: center;"> ' . $item->completed . ' </td>
                    <td class="w-10" style="text-align: center;"> ' . $item->number_actions . '</td>
                    <td class="w-10" style="text-align: center;">$ ' . number_format($item->budget_executed, 2) . '</td>
                </tr>
                ';
            }
        }

        $html = '
        <style>
            table,
            th,
            td {
                border-collapse: collapse;
                border: 1px solid #000 !important;
            }
            td {
                text-align: left;
            }
            col.fondo {
                background-color: lightblue;
            }
            .fs-sm{
                font-size: 9px;
                text-align: center;
            }
            .w-10{
                width: 11% !important;
            }
            .w-70{
                width: 67% !important;
            }
        </style>
        <table id="table" cellspacing="0" cellpadding="5">
                <tr style="background-color:#8EA9DB;color:black;">
                    <td colspan="4" style="text-align: center; font-weight:bold;">' . $project . '</td>
                </tr>
            <tbody>
       ';

        // Adding the data
        $html .= "$rowsData
            </tbody>
        </table>";

        $pdf->writeHTML($html, true, false, true, false, '');

        $pdf->Output("reporte.pdf", "I");
    }


    /**
     * Generate Axis PDF.
     *
     * @return \Illuminate\Http\Response
     */
    public function generateDespachoPDF(Request $request)
    {
        set_time_limit(0);
        ini_set("memory_limit", "1024M");

        $data = $request->all();

        $axis_title = "";

        // Report All Axis
        if ($request->axis_description == "GENERAL") {

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
