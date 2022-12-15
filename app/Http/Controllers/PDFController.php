<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Barryvdh\DomPDF\PDF;
use Illuminate\Http\Request;

class PDFController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generatePDF(Request $request)
    {
        $ou_name = $request->ou_name;
        $month_name = $request->month_name;
        $value = $request->value;
        $planification_name = $request->planification_name;
        $type_name = $request->type_name;

        switch ($planification_name) {
            case "Plan cuscatlán":
                // dd("Plan cuscatlán");
                break;
        }
        $data = [
            'name' => $ou_name,
            'value' => $value,
        ];


        $pdf = PDF::loadView('PDF.report', compact('data'));

        return $pdf->stream('report-' . now() . '.pdf');
    }
}
