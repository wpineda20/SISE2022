<?php

namespace App\Http\Controllers\Cuscatlan;

use App\Http\Controllers\Controller;
use App\Http\Controllers\EncryptController;
use App\Models\User;
use App\Models\Cuscatlan\ActionsCusca;
use App\Models\Cuscatlan\Month;
use App\Models\Cuscatlan\OrganizationalUnit;
use App\Models\Cuscatlan\ResultsCusca;
use App\Models\Cuscatlan\Year;
use App\Models\Cuscatlan\Unit;
use Illuminate\Http\Request;
use App\Models\Cuscatlan\TrakingCuscaMonthYearAction;

class ActionsCuscaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $actionsCusca = ActionsCusca::select(
            'action_description',
            'annual_actions',
            //'actions_cusca.executed',
            'responsable_name',
            'verification_method',
            'data_source',
            // 'actions_cusca.measure_unit',
            'un.unit_name',
            'budget_executed',
            'user_name',
            'result_description',
            'rs.*',
            'ou.ou_name',
            //'m.*',
            'y.year_name',
            'actions_cusca.id as id',
        )
            ->join('users as u', 'actions_cusca.user_id', '=', 'u.id')
            ->join('results_cusca as rs', 'actions_cusca.results_cusca_id', '=', 'rs.id')
            ->join('organizational_units as ou', 'rs.organizational_units_id', '=', 'ou.id')
            //->join('months as m', 'rs.month_id', '=', 'm.id')
            ->join('years as y', 'rs.year_id', '=', 'y.id')
            ->join('units as un', 'actions_cusca.unit_id', '=', 'un.id')
            ->get();


        $months = Month::all();
        foreach ($actionsCusca as $key => $action) {
            $action->months = $months;

            // dd($action);
            foreach ($action->months as $key => $month) {
                $monthInAction = TrakingCuscaMonthYearAction::where(
                    [
                        'actions_cusca_id' => $action->id,
                        'month_id' => $month->id
                    ]
                )->first();

                $month->value = (!is_null($monthInAction)) ? true : false;
            }
        }
        dd($actionsCusca->toArray());

        $actionsCusca = EncryptController::encryptArray($actionsCusca, [
            'id', 'user_id', 'unit_id',
            'results_cusca_id'
        ]);

        return response()->json(['message' => 'success', 'actionsCusca' => $actionsCusca]);
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
        $actionsCusca = ActionsCusca::create([
            'action_description' => $request->action_description,
            'annual_actions' => $request->annual_actions,
            //'executed' => ($request->executed)?'SI':'NO',
            'responsable_name' => $request->responsable_name,
            'verification_method' => $request->verification_method,
            'data_source' => $request->data_source,
            // 'measure_unit' => $request->measure_unit,
            'budget_executed' => $request->budget_executed,
            'created_user_id' => auth()->user()->id,
            'user_id' => User::where('user_name', $request->user_name)->first()->id,
            'unit_id' => Unit::where('unit_name', $request->unit_name)->first()->id,
            'results_cusca_id' => ResultsCusca::where('result_description', $request->result_description)->first()->id,
        ]);

        foreach ($request->months as $month) {
            // dd($month['value']);
            if ($month['value']) {
                TrakingCuscaMonthYearAction::create([
                    'actions_cusca_id' => $actionsCusca->id,
                    'month_id' => Month::where('month_name', $month['month_name'])->first()->id,
                    'year_id' => Year::where('year_name', date("Y"))->first()->id,
                    'traking_status_id' => 1,
                ]);
            }
        }

        return response()->json(['message' => 'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ActionsCusca  $actionsCusca
     * @return \Illuminate\Http\Response
     */
    public function show(ActionsCusca $actionsCusca)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ActionsCusca  $actionsCusca
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $users = User::where('user_name', $request->user_name)->first();
        $units = Unit::where('unit_name', $request->unit_name)->first();

        $resultsCusca = ResultsCusca::where('result_description', $request->result_description)->first();

        $data = EncryptController::decryptModel($request->except(['user_name', 'result_description', 'year_goal', 'indicator_id', 'organizational_units_id', 'year_id', 'period_id', 'strategy_cusca_id', 'ou_name', 'month_name', 'year_name', 'months', 'unit_name']), 'id');

        $data['user_id'] = $users->id;
        $data['unit_id'] = $units->id;
        $data['results_cusca_id'] = $resultsCusca->id;

        ActionsCusca::where('id', $data['id'])->update($data);

        // Inserting tracing actions
        // Only deleting the status haven't been modified
        TrakingCuscaMonthYearAction::where([
            'actions_cusca_id' => $data['id'],
            'traking_status_id' => 1,
        ])->forceDelete();

        foreach ($request->months as $actionMonth) {
            $month = Month::where('month_name', $actionMonth['month_name'])->first();
            $year = Year::where('year_name', $request->year_name)->first();

            if ($actionMonth['value']) {
                // Creating tracing actions
                TrakingCuscaMonthYearAction::updateOrCreate([
                    'actions_cusca_id' => $data['id'],
                    'month_id' => $month->id,
                    'year_id' => $year->id,
                    'traking_status_id' => 1,
                ]);
            }
        }


        return response()->json(["message" => "success"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ActionsCusca  $actionsCusca
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $id = EncryptController::decryptValue($id);
        ActionsCusca::where('id', $id)->delete();
        TrakingCuscaMonthYearAction::where('actions_cusca_id', $id)->delete();

        return response()->json(["message" => "success"]);
    }
}
