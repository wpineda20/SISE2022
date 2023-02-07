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
use App\Models\Cuscatlan\Period;
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
        $this->Image($img_file, 155, 90, 120, 120, '', '', '', false, 200, '', false, false, 0);
        // Restore full opacity
        $this->SetAlpha(1);
        // restore auto-page-break status
        $this->SetAutoPageBreak($auto_page_break, $bMargin);
        // Set the starting point for the page content (z-index)
        $this->setPageMark();
    }

    protected $last_page_flag = false;

    public function Close()
    {
        $this->last_page_flag = true;
        parent::Close();
    }

    public function Footer()
    {
        if ($this->last_page_flag) {
            // Set font
            $this->SetFont('helvetica', 'I', 8);

            // center of ellipse
            $xc = 108;
            $yc = 264;
            // ellipse axis
            // X Y axis
            $this->SetDrawColor(10, 10, 10);
            $this->Line($xc - 50, $yc, $xc + 50, $yc);
            // $this->Line($xc, $yc - 50, $xc, $yc + 50);
            // Print text using writeHTMLCell()
            // $this->writeHTMLCell(0, 0, '', '', $this, 0, 1, 0, true, '', true);
            // Position at 15 mm from bottom
            $this->SetY(-18);
            $this->Cell(0, 10, 'Nombre y Sello', 0, false, 'C', 0, '', 0, false, 'T', 'M');
            $this->SetY(-15);
            $this->Cell(0, 10, 'Director/a de la dependencia que presenta', 0, false, 'C', 0, '', 0, false, 'T', 'M');
        } else {
            //     // ... footer for the normal page ...
        }
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
        $pdf = new MYPDF('P', 'mm', 'A4', true, 'UTF-8', false);

        // Set margins
        $pdf->SetMargins(21, 27, 21);
        $pdf->SetHeaderMargin(0);
        $pdf->SetFooterMargin(0);

        // Remove default footer
        $pdf->setPrintFooter(true);

        // Set auto page breaks
        $pdf->SetAutoPageBreak(TRUE, 10);

        // Set image scale factor
        $pdf->setImageScale(1.25);

        // Set source file
        $pdf->setSourceFile(public_path("ejecutivo_p.pdf"));

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
        $pdf->setFontSize(10);

        $pdf->setXY(86, 22);
        $pdf->writeHTML("<b>MINISTERIO DE CULTURA</b>");

        $pdf->setXY(58, 28);
        $pdf->writeHTML("<b>Dirección General de Planificación y Desarrollo Institucional</b>");

        $pdf->setY(34);
        $pdf->Write(1, "Reporte de Seguimiento Mensual Año $currentYear", '', '', 'C');

        $pdf->setY(40);
        $pdf->Write(1, "$request->ou_name - $request->month_name", '', '', 'C');

        // Table
        $pdf->setY(50);
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
            html{
                font-size: 10px !important;
            }
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
                font-size: 10px;
                text-align: center;
            }
            .w-10{
                width: 14% !important;
            }
            .w-70{
                width: 58% !important;
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
                ->setPaper("A4", "portrait");

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
            ->setPaper("A4", "portrait");

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
        $start_month = $request->start_month;
        $end_month = $request->end_month;

        //Create new PDF
        $pdf = new MYPDF('P', 'mm', 'A4', true, 'UTF-8', false);

        // Set margins
        // $pdf->SetMargins(15, 27, 15);
        $pdf->SetMargins(21, 27, 21);
        $pdf->SetHeaderMargin(0);
        $pdf->SetFooterMargin(0);

        // Remove default footer
        $pdf->setPrintFooter(true);

        // Set auto page breaks
        $pdf->SetAutoPageBreak(TRUE, 10);

        // Set image scale factor
        $pdf->setImageScale(1.25);

        // Set source file
        $pdf->setSourceFile(public_path("ejecutivo_p.pdf"));

        // Add page
        $pdf->AddPage();

        // Import page
        $tplIdx = $pdf->importPage(1);
        // Use template
        $pdf->useTemplate($tplIdx, null, null, null, null, true);
        $pdf->setXY(0, 0);

        // Titles
        $pdf->SetTextColor(0, 0, 0);
        $pdf->setXY(86, 28);
        $pdf->setFontSize(10);
        $pdf->writeHTML("<b>MINISTERIO DE CULTURA</b>");

        $pdf->setXY(58, 35);
        $pdf->writeHTML("<b>Dirección General De Planificación y Desarrollo Institucional</b>");

        $pdf->setY(42);
        $pdf->Write(1, "Reporte Acumulado", '', '', 'C');
        // $pdf->writeHTML("Reporte Acumulado");

        $pdf->setY(49);
        $pdf->Write(1, "$request->ou_name $start_month - $end_month $currentYear", '', '', 'C');

        // Table
        $pdf->setY(60);

        $results = ResultsCusca::select(
            'results_cusca.*',
            'act.id as actions_id',
            'act.action_description',
            'act.year_goal_actions'
        )
            ->join('actions_cusca as act', 'act.results_cusca_id', '=', 'results_cusca.id', 'left outer')
            ->where('results_cusca.organizational_units_id', OrganizationalUnit::where('ou_name', $request->ou_name)->first()?->id)
            ->get();

        foreach ($results as $value) {

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
                // ->where('month_id', intval(date('n')))
                ->whereBetween(
                    'month_id',
                    [
                        Month::where('month_name', $request->start_month)->first()?->id,
                        Month::where('month_name', $request->end_month)->first()?->id
                    ]
                )
                ->get();

            $goal = $value->year_goal_actions;

            foreach ($value->trackings as $item) {

                $advance = $item->number_actions;

                $item->per_progress = $advance / $goal * 100;
            }
        }

        // dd($results);
        $rowsData = '';

        foreach ($results as $res) {
            $rowsData .= '
             <tr>
               <td>' . $res->result_description . '</td>
               <td>' . $res->action_description . '</td>
               <td style="text-align: center; font-weight:bold">' . $res->year_goal_actions . '</td>
           
            ';

            foreach ($res->trackings as $value) {

                $per_progress = $value->per_progress;
                $color = "";

                if ($per_progress == 100.00) {
                    //Green
                    $color = "#2ECC71";
                }
                if ($per_progress >= 0.00 && $per_progress <= 49.99) {
                    //Red
                    $color = "#F31414";
                }
                if (
                    $per_progress >= 50.00 && $per_progress <= 99.99
                ) {
                    //Orange
                    $color = "#F39C12";
                }

                $rowsData .= '
                    <td style="text-align: center; font-weight:bold">' . $value->number_actions . '</td>
                    <td style="text-align: center; font-weight:bold;color: ' . $color . '">' . number_format($per_progress, 2) . '%</td>
                </tr>
                ';
            }
        }

        $html = '
        <style>
           html {
                font-size: 10px !important;
            }
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
                    <td style="text-align: center; font-weight:bold; width: 35%">Acción</td>
                    <td style="text-align: center; font-weight:bold; width: 12%">Número de Acciones Anuales</td>
                    <td style="text-align: center; font-weight:bold; width: 11%">Avance</td>
                    <td style="text-align: center; font-weight:bold; width: 12%">Porcentaje De Avance</td>
                </tr>
            <tbody>
       ';

        // Adding the data
        $html .= "$rowsData
            </tbody>
        </table>";

        $pdf->writeHTML($html, true, false, true, false, '');

        $pdf->Output("Reporte Acumulado " . $start_month . ' - ' . $end_month . ' ' .  $currentYear . ".pdf", "I");
    }
}
