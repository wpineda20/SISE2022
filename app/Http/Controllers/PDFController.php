<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//Models
use App\Models\Cuscatlan\AxisCusca;
use App\Models\Cuscatlan\ActionsCusca;
use App\Models\Cuscatlan\ResultsCusca;
use App\Models\Cuscatlan\Month;
use App\Models\Cuscatlan\OrganizationalUnit;
use App\Models\Cuscatlan\Programmatic_Objective;
use App\Models\Cuscatlan\TrakingCuscaMonthYearAction;

//PDF
use Barryvdh\DomPDF\Facade as DomPDF;
use setasign\Fpdi\Tcpdf\Fpdi;
use DB;

// Extend the Fpdi class to create custom Header and Footer
class MYPDF extends Fpdi
{
    public function Header()
    {
        // Get the current page break margin
        $bMargin = $this->getBreakMargin();
        // Get current auto-page-break mode
        $auto_page_break = $this->AutoPageBreak;
        // Disable auto-page-break
        $this->SetAutoPageBreak(false, 0);
        // Set custom opacity
        $this->SetAlpha(0.1);
        // Set path image
        $img_file = public_path("Escudo_D.png");
        // Set background image
        $this->Image($img_file, 192, 30, 170, 170, '', '', '', false, 200, '', false, false, 0);
        // Restore full opacity
        $this->SetAlpha(1);
        // restore auto-page-break status
        $this->SetAutoPageBreak($auto_page_break, $bMargin);
        // Set the starting point for the page content (z-index)
        $this->setPageMark();
    }
}

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

        //Create new PDF
        $pdf = new MYPDF('L', 'mm', 'A4', true, 'UTF-8', false);

        // Set margins
        // $pdf->SetMargins(15, 27, 15);
        $pdf->SetHeaderMargin(0);
        $pdf->SetFooterMargin(0);

        // Remove default footer
        $pdf->setPrintFooter(false);

        // Set auto page breaks
        $pdf->SetAutoPageBreak(TRUE, 10);

        // Set image scale factor
        $pdf->setImageScale(1.25);

        // Set source file
        $pdf->setSourceFile(public_path("ejecutivo_s.pdf"));

        // Add page
        $pdf->AddPage();

        // Import page
        $tplIdx = $pdf->importPage(1);
        // Use template
        $pdf->useTemplate($tplIdx, null, null, null, null, true);
        $pdf->setXY(0, 0);

        $project = "PLAN CUSCATLAN";
        $currentYear = date("Y");

        // Titles
        $pdf->SetTextColor(0, 0, 0);
        $pdf->setXY(11, 10);
        $pdf->setFontSize(13);
        $pdf->writeHTML("<b>Dirección General de Planificación y Desarrollo Institucional</b>");

        $pdf->setXY(11, 17);
        $pdf->setFontSize(13);
        $pdf->writeHTML("<b>Reporte de Seguimiento Mensual Año $currentYear</b>");

        $pdf->setFontSize(12);
        $pdf->setY(26);
        $pdf->Write(1, "$request->ou_name", '', '', 'L');
        $pdf->setY(33);
        $pdf->Write(1, "$request->month_name", '', '', 'L');

        // Table
        $pdf->setY(45);
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

        $pdf->Output("Reporte Mensual " . $request->month_name . ".pdf", "I");
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

        $axis_title = "";
        $data = $request->all();

        // Report All Axis
        if ($request->axis_description == "General") {

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

            return $pdf->stream("Reporte " . $axis_title . ".pdf");
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

        return $pdf->stream("Reporte " . $axis_title  . ".pdf");
    }


    /**
     * Generate Accumulated PDF
     * 
     * @return \Illuminate\Http\Response
     */
    public function generateAcumuladoPDF(Request $request)
    {
        set_time_limit(0);
        ini_set("memory_limit", "1024M");

        // dd($request);
        $currentYear = date('Y');

        //Create new PDF
        $pdf = new MYPDF('L', 'mm', '', true, 'UTF-8', false);

        // Set margins
        // $pdf->SetMargins(15, 27, 15);
        $pdf->SetHeaderMargin(0);
        $pdf->SetFooterMargin(0);

        // Remove default footer
        $pdf->setPrintFooter(false);

        // Set auto page breaks
        $pdf->SetAutoPageBreak(TRUE, 10);

        // Set image scale factor
        $pdf->setImageScale(1.25);

        // Set source file
        $pdf->setSourceFile(public_path("ejecutivo_s.pdf"));

        // Add page
        $pdf->AddPage();

        // Import page
        $tplIdx = $pdf->importPage(1);
        // Use template
        $pdf->useTemplate($tplIdx, null, null, null, null, true);
        $pdf->setXY(0, 0);

        // Titles
        $pdf->SetTextColor(0, 0, 0);
        $pdf->setXY(115, 28);
        $pdf->setFontSize(12);
        $pdf->writeHTML("<b>MINISTERIO DE CULTURA</b>");
        $pdf->setXY(80, 35);
        $pdf->setFontSize(12);
        $pdf->writeHTML("<b>Dirección General De Planificación y Desarrollo Institucional</b>");

        $pdf->setXY(123, 42);
        $pdf->setFontSize(12);
        $pdf->writeHTML("Reporte Acumulado");

        $pdf->setFontSize(12);
        $pdf->setY(49);
        $pdf->Write(1, "$request->ou_name Enero - Febrero $currentYear", '', '', 'C');

        // Table
        $pdf->setY(65);

        $results = ResultsCusca::select(
            'results_cusca.*',
            'act.id as actions_id',
            'act.action_description',
            'act.year_goal_actions'
        )
            ->join('actions_cusca as act', 'act.results_cusca_id', '=', 'results_cusca.id', 'left outer')
            ->where('results_cusca.organizational_units_id', OrganizationalUnit::where('ou_name', $request->ou_name)->first()?->id)
            ->get();

        $rowsData = '';

        foreach ($results as $res) {
            $rowsData .= '
             <tr>
               <td>' . $res->result_description . '</td>
               <td>' . $res->action_description . '</td>
               <td></td>
               <td></td>
               <td></td>
            </tr>
            ';
        }

        // dd($results);

        $html = '
        <style>
            table {
                width: 100%;
                border: 2px solid #a19d9d;
                border-spacing: 0px;
            }
            td,
            th {
                border: 1px solid #a19d9d;
                text-align: left;
                padding: 8px;
            }
        </style>
        <table cellspacing="0" cellpadding="5">
                <tr>
                    <td style="text-align: center; font-weight:bold; width: 30%">Resultado</td>
                    <td style="text-align: center; font-weight:bold; width: 40%">Acción</td>
                    <td style="text-align: center; font-weight:bold; width: 10%">Número de Acciones Anuales</td>
                    <td style="text-align: center; font-weight:bold; width: 10%">Avance</td>
                    <td style="text-align: center; font-weight:bold; width: 10%">Porcentaje De Avance</td>
                </tr>
            <tbody>
       ';

        // Adding the data
        $html .= "$rowsData
            </tbody>
        </table>";

        $pdf->writeHTML($html, true, false, true, false, '');


        $pdf->Output("Reporte Acumulado " . now() . ".pdf", "I");
    }
}
