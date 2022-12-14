<?php

namespace App\Http\Controllers\Cuscatlan;

use App\Http\Controllers\Controller;
use App\Http\Controllers\EncryptController;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Role::select(['id', 'name'])->get();
        $roles = EncryptController::encryptArray($roles, ['id']);

        return response()->json(['message' => 'success', 'roles' => $roles]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getActualUserRoles()
    {
        $roles = auth()->user()->getRoleNames();

        return response()->json(['message' => 'success', 'roles' => $roles]);
    }

    public static function getAllowedRoles()
    {
        $roles = auth()->user()->getRoleNames();

        return $roles;
    }
}
