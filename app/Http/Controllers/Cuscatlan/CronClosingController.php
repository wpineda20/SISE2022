<?php

namespace App\Http\Controllers\Cuscatlan;

use App\Http\Controllers\Controller;
use App\Http\Controllers\EncryptController;
use App\Models\Cuscatlan\CronClosing;
use Illuminate\Http\Request;

class CronClosingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cron = CronClosing::all();
        $cron = EncryptController::encryptArray($cron, ['id']);
        
        return response()->json(['message' => 'success', 'cron' => $cron]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         CronClosing::insert($request->all());

        return response()->json(['message'=>'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CronClosing  $cronClosing
     * @return \Illuminate\Http\Response
     */
    public function show(CronClosing $cronClosing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CronClosing  $cronClosing
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = EncryptController::decryptModel($request->all(), 'id');

        CronClosing::where('id', $data['id'])->update($data);

        return response()->json(["message"=>"success"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CronClosing  $cronClosing
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $id = EncryptController::decryptValue($id);

        CronClosing::where('id', $id)->delete();
        
        return response()->json(["message"=>"success"]);
    }
}
