<?php

namespace App\Http\Controllers\Cuscatlan;

use App\Http\Controllers\Controller;
use App\Http\Controllers\EncryptController;
use DB;
use Crypt;
use App\Models\User;
use App\Models\Cuscatlan\Indicator;
use App\Models\Cuscatlan\Year;
use App\Models\Cuscatlan\Period;
use App\Models\Cuscatlan\OrganizationalUnit;
use App\Models\Cuscatlan\Unit;
use App\Models\Cuscatlan\ResultsCusca;
use App\Models\Cuscatlan\StrategyCusca;
use Illuminate\Http\Request;

class ResultsCuscaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $resultsCusca = ResultsCusca::select(
            'results_cusca.id',
            'result_description',
            'user_name',
            'indicator_name',
            'ou_name',
            'year_name',
            'period_name',
            'description_strategy',
            'unit_name',
        )

            ->join('users as u', 'results_cusca.user_id', '=', 'u.id')
            ->join('indicators as i', 'results_cusca.indicator_id', '=', 'i.id')
            ->join('organizational_units as ou', 'results_cusca.organizational_units_id', '=', 'ou.id')
            ->join('years as y', 'results_cusca.year_id', '=', 'y.id')
            ->join('periods as p', 'results_cusca.period_id', '=', 'p.id')
            ->join('strategy_cusca as sc', 'results_cusca.strategy_cusca_id', '=', 'sc.id')
            ->join('units as un', 'results_cusca.unit_id', '=', 'un.id')
            ->get();

        $resultsCusca = EncryptController::encryptArray($resultsCusca, [
            'id', 'user_id',
            'indicator_id', 'organizational_units_id', 'year_id', 'period_id', 'strategy_cusca_id', 'unit_id'
        ]);

        return response()->json(['message' => 'success', 'resultsCusca' => $resultsCusca]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // dd($request);
        $data = $request->except([
            'user_name', 'indicator_name', 'ou_name', 'year_name',
            'period_name', 'description_strategy', 'unit_name'
        ]);

        $user = User::where('user_name', $request->user_name)->first();
        $indicator = Indicator::where('indicator_name', $request->indicator_name)->first();
        $ou = OrganizationalUnit::where('ou_name', $request->ou_name)->first();
        $year = Year::where('year_name', $request->year_name)->first();
        $unit = Unit::where('unit_name', $request->unit_name)->first();
        $period = Period::where('period_name', $request->period_name)->first();
        $strategy = StrategyCusca::where('description_strategy', $request->description_strategy)->first();

        $data['user_id'] = $user->id;
        $data['indicator_id'] = $indicator->id;
        $data['organizational_units_id'] = $ou->id;
        $data['year_id'] = $year->id;
        $data['period_id'] = $period->id;
        $data['strategy_cusca_id'] = $strategy->id;
        $data['unit_id'] = $unit->id;
        //$data['executed'] = ($data['executed'])?"SI":"NO";

        ResultsCusca::insert($data);

        return response()->json(['message' => 'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ResultsCusca  $resultsCusca
     * @return \Illuminate\Http\Response
     */
    public function show(ResultsCusca $resultsCusca)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ResultsCusca  $resultsCusca
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //  dd($request->all());
        $data = $request->except([
            'user_name', 'indicator_name', 'ou_name', 'year_name',
            'period_name', 'description_strategy', 'unit_name'
        ]);
        $user = User::where('user_name', $request->user_name)->first();
        $indicator = Indicator::where('indicator_name', $request->indicator_name)->first();
        $ou = OrganizationalUnit::where('ou_name', $request->ou_name)->first();
        $year = Year::where('year_name', $request->year_name)->first();
        $period = Period::where('period_name', $request->period_name)->first();
        $strategy = StrategyCusca::where('description_strategy', $request->description_strategy)->first();
        $unit = Unit::where('unit_name', $request->unit_name)->first();

        $data = EncryptController::decryptModel($request->except([
            'user_name', 'axis_description', 'indicator_name',
            'ou_name', 'year_name', 'period_name', 'description_strategy', 'unit_name'
        ]), 'id');

        $data['user_id'] = $user->id;
        $data['indicator_id'] = $indicator->id;
        $data['organizational_units_id'] = $ou->id;
        $data['year_id'] = $year->id;
        $data['period_id'] = $period->id;
        $data['strategy_cusca_id'] = $strategy->id;
        $data['unit_id'] = $unit->id;
        //$data['executed'] = ($data['executed'])?"SI":"NO";
        // dd($data);

        ResultsCusca::where('id', $data['id'])->update($data);
        return response()->json(["message" => "success"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ResultsCusca  $resultsCusca
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $id = EncryptController::decryptValue($id);

        ResultsCusca::where('id', $id)->delete();
        return response()->json(["message" => "success"]);
    }
}
