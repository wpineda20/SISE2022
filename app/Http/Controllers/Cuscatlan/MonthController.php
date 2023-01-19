<?php

namespace App\Http\Controllers\Cuscatlan;

use App\Http\Controllers\Controller;
use App\Http\Controllers\EncryptController;
use App\Models\Cuscatlan\Month;
use Illuminate\Http\Request;
use DB;
use Crypt;

class MonthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $months = Month::select('month_name', 'id')->get();

        $months = EncryptController::encryptArray($months, ['id']);

        return response()->json(['message' => 'success', 'months' => $months]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexTracking()
    {
        $months = Month::select('month_name', 'id')->get();
        foreach ($months as $key => $month) {
            $month->value = false;
        }

        $months = EncryptController::encryptArray($months, ['id']);

        return response()->json(['message' => 'success', 'months' => $months]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Month::insert($request->all());

        return response()->json(['message' => 'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Month  $month
     * @return \Illuminate\Http\Response
     */
    public function show(Month $month)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Month  $month
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = EncryptController::decryptModel($request->all(), 'id');

        Month::where('id', $data['id'])->update($data);
        return response()->json(["message" => "success"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Month  $month
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $id = EncryptController::decryptValue($id);

        Month::where('id', $id)->delete();
        return response()->json(["message" => "success"]);
    }

    /**
     * Months allowed for monthly reporting.
     *
     * @param  \App\Models\Month  $month
     * @return \Illuminate\Http\Response
     */

    public function monthsAllowed(Request $request)
    {
        $currentMonth = intval(date("n"));

        $monthsAllowed = DB::table('months')
            ->where('id', '<=', $currentMonth)
            ->get();

        return response()->json(["message" => "success", "monthsAllowed" => $monthsAllowed]);
    }
}
