<?php

namespace App\Http\Controllers\Cuscatlan;

use App\Http\Controllers\Controller;
use App\Mail\NotifyObservation;
use Encrypt;
use App\Models\Cuscatlan\TrackingCusca;
use App\Models\User;
use App\Models\Cuscatlan\TrakingStatus;
use App\Models\Cuscatlan\TrakingCuscaMonthYearAction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class TrackingCuscaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $roles = RoleController::getAllowedRoles();
        $filters = [];

        if (isset($roles[0])) {
            switch ($roles[0]) {
                case "Enlace":
                    $filters = [
                        'ou.id' => auth()->user()->organizational_units_id,
                    ];
                    break;
            }
        }

        if (isset($request->filter)) {
            switch ($request->filter) {
                case "Mensuales":
                    $month = "month_id = " . intval(date('n'));
                    break;
                case "Atrasado":
                    $month = "month_id < " . intval(date('n'));
                    $filters['ts.status_name'] = "Atrasado";
                    $filters['traking_cusca_month_year_action.executed'] = 'NO';
                    break;
                case "Ejecutado":
                    $month = "month_id <= " . intval(date('n'));
                    $filters['traking_cusca_month_year_action.executed'] = 'SI';
                    break;
                case "Completado":
                    $month = "month_id <= " . intval(date('n'));
                    $filters['ts.status_name'] = "Completado";
                    $filters['traking_cusca_month_year_action.executed'] = 'SI';
                    break;
            }
        }

        $filters['y.year_name'] = date('Y');

        $trackingsCusca = TrakingCuscaMonthYearAction::select(
            //'tc.*',
            'ac.*',
            'y.*',
            'm.*',
            'traking_cusca_month_year_action.tracking_detail',
            'traking_cusca_month_year_action.executed',
            'traking_cusca_month_year_action.observation',
            'traking_cusca_month_year_action.reply',
            'ts.*',
            'ou.*',
            'reply',
            'observation',
            //'user_name',
            //'tc.traking.status_id'
            'traking_cusca_month_year_action.id as id',
        )
            ->join('actions_cusca as ac', 'traking_cusca_month_year_action.actions_cusca_id', '=', 'ac.id')
            //->join('users as u', 'tracking_cusca.user_id', '=', 'u.id')
            ->join('years as y', 'traking_cusca_month_year_action.year_id', '=', 'y.id')
            ->join('months as m', 'traking_cusca_month_year_action.month_id', '=', 'm.id')
            ->join('results_cusca as re', 'ac.results_cusca_id', '=', 're.id')
            ->join('organizational_units as ou', 're.organizational_units_id', '=', 'ou.id')
            ->join('directions as di', 'ou.direction_id', '=', 'di.id')
            ->join('institutions as inst', 'di.institution_id', '=', 'inst.id')
            ->join('traking_statuses as ts', 'traking_cusca_month_year_action.traking_status_id', '=', 'ts.id')
            ->where($filters)
            ->whereRaw($month)
            ->orderBy('traking_cusca_month_year_action.id', 'desc')
            ->get();

        $trackingsCusca = Encrypt::encryptObject(
            $trackingsCusca,
            'id',
            'actions_cusca_id',
            'year_id',
            'month_id',
            'traking_status_id'
        );

        return response()->json(['message' => 'success', 'trackingsCusca' => $trackingsCusca]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (auth()->user()->getRoleNames()[0] != "Administrador") {
            return response()->json([
                'message' => 'success',
                "error" => "El usuario no posee los permisos suficientes para esta acción."
            ]);
        }

        $data = $request->except(['user_name']);

        $status = TrakingStatus::where('status_name', $request->status_name)->first();

        $data['user_id'] = auth()->user()->id;
        $data['traking_status_id'] = $status->id;
        $data['executed'] = ($data['executed']) ? "SI" : "NO";
        $data['tracking_detail'] = $request->tracking_detail;

        TrackingCusca::insert($data);

        return response()->json(['message' => 'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TrackingCusca  $trackingCusca
     * @return \Illuminate\Http\Response
     */
    public function show(TrackingCusca $trackingCusca)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TrackingCusca  $trackingCusca
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        if (auth()->user()->user_name != $request->user_name || !auth()->user()->hasRole('Administrador') || !auth()->user()->hasRole('Enlace')) {
            return response()->json(["message" => "success", "reason" => "Únicamente $request->user_name o el administrador puede modificar el registro."]);
        }

        $status = TrakingStatus::where('status_name', $request->status_name)->first();
        $id = (int) Encrypt::decryptValue($request->id);

        $traking = TrakingCuscaMonthYearAction::where('id', $id)->first();

        if ($request->observation != $traking->observation && !is_null($traking->observation) && !$traking->observation != "") {
            $action = TrakingCuscaMonthYearAction::join('actions_cusca as ac', 'traking_cusca_month_year_action.actions_cusca_id', '=', 'ac.user_id', 'left outer')
                ->join('users as u', 'ac.user_id', '=', 'u.id', 'right outer')
                ->first();

            // Notifiying
            Mail::to($action['email'])
                ->queue(new NotifyObservation(
                    $request->observation,
                    $action['action_description'],
                ));
        }

        $traking->observation = $request->observation ?? "";
        $traking->reply = $request->reply ?? "";
        $traking->tracking_detail = $request->tracking_detail;
        $traking->executed = ($request->executed) ? "SI" : "NO";
        $traking->traking_status_id = $status->id;
        $traking->save();

        return response()->json(["message" => "success"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TrackingCusca  $trackingCusca
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $id = Encrypt::decryptValue($id);
        $tracking = TrakingCuscaMonthYearAction::where('id', $id)->first();
        $user = User::where('id', $tracking->user_id)->first();

        if (auth()->user()->id == $tracking->user_id || auth()->user()->hasRole('Administrador')) {
            TrakingCuscaMonthYearAction::where('id', $id)->delete();
            return response()->json(["message" => "success"]);
        }

        return response()->json([
            "message" => "success",
            "reason" => "Únicamente $user->user_name o el administrador puede eliminar el registro."
        ]);
    }
}
