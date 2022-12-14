<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Cuscatlan\HomeController;
use App\Http\Controllers\Cuscatlan\DepartmentController;
use App\Http\Controllers\Cuscatlan\MunicipalityController;
use App\Http\Controllers\Cuscatlan\UserController;
use App\Http\Controllers\Cuscatlan\RoleController;
use App\Http\Controllers\Cuscatlan\DirectionController;
use App\Http\Controllers\Cuscatlan\FinancingController;
use App\Http\Controllers\Cuscatlan\IndicatorController;
use App\Http\Controllers\Cuscatlan\InstitutionController;
use App\Http\Controllers\Cuscatlan\MonthlyClosingController;
use App\Http\Controllers\Cuscatlan\OrganizationalUnitController;
use App\Http\Controllers\Cuscatlan\PeriodController;
use App\Http\Controllers\Cuscatlan\PoaClosingController;
use App\Http\Controllers\Cuscatlan\ProgrammaticObjectiveController;
use App\Http\Controllers\Cuscatlan\StrategyCuscaController;
use App\Http\Controllers\Cuscatlan\UnitController;
use App\Http\Controllers\Cuscatlan\TrakingStatusController;
use App\Http\Controllers\Cuscatlan\MonthController;
use App\Http\Controllers\Cuscatlan\YearController;
use App\Http\Controllers\Cuscatlan\AxisCuscaController;
use App\Http\Controllers\Cuscatlan\ResultsCuscaController;
use App\Http\Controllers\Cuscatlan\ActionsCuscaController;
use App\Http\Controllers\Cuscatlan\TrackingCuscaController;
use App\Http\Controllers\Cuscatlan\TrackingObservationCuscaController;
use App\Http\Controllers\PDFController;
use GuzzleHttp\Middleware;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes(['verify' => true, 'remember_me'=>false]);

Route::group(['middleware'=> ['auth', 'verified']], function () {
    Route::group(['middleware'=> ['has.role:Administrador,Enlace,Auditor']], function () {
        //Reports
        Route::get('generate-pdf', [PDFController::class, 'generatePDF']);
        Route::get('/api/role/user', [RoleController::class, 'getActualUserRoles']);
        Route::post('/api/user/actualUser', [UserController::class, 'actualUser']);
    });

    Route::get('/', function () {
        return view('home');
    });

    Route::group(['middleware'=>['has.role:Administrador']], function () {
        // Apis
        Route::resource('/api/direction', DirectionController::class);
        Route::resource('/api/financing', FinancingController::class);
        Route::resource('/api/monthlyClosing', MonthlyClosingController::class);
        Route::resource('/api/period', PeriodController::class);
        Route::resource('/api/poaClosing', PoaClosingController::class);

        Route::resource('/api/programmaticObjective', ProgrammaticObjectiveController::class);
        Route::resource('/api/strategyCusca', StrategyCuscaController::class);
        Route::resource('/api/axisCusca', AxisCuscaController::class);
        Route::resource('/api/resultsCusca', ResultsCuscaController::class);

        Route::resource('/api/user', UserController::class);
        Route::resource('/api/role', RoleController::class);

        // Views
        Route::get('/users', function () {
            return view('cuscatlan.user.index');
        });

        Route::get('/directions', function () {
            return view('cuscatlan.direction.index');
        });

        Route::get('/financings', function () {
            return view('cuscatlan.financing.index');
        });

        Route::get('/institutions', function () {
            return view('cuscatlan.institution.index');
        });

        Route::get('/monthlyClosings', function () {
            return view('cuscatlan.monthly_closing.index');
        });

        Route::get('/organizationalUnits', function () {
            return view('cuscatlan.organizational_unit.index');
        });

        Route::get('/periods', function () {
            return view('cuscatlan.period.index');
        });

        Route::get('/poaClosings', function () {
            return view('cuscatlan.poa_closing.index');
        });

        Route::get('/units', function () {
            return view('cuscatlan.unit.index');
        });

        Route::get('/trakingStatus', function () {
            return view('cuscatlan.traking_status.index');
        });

        Route::get('/months', function () {
            return view('cuscatlan.month.index');
        });

        Route::get('/years', function () {
            return view('cuscatlan.year.index');
        });

        Route::get('/annualResults', function () {
            return view('cuscatlan.annual_results.index');
        });

        Route::get('/programmaticObjective', function () {
            return view('cuscatlan.programmatic_objective.index');
        });

        Route::get('/strategyCusca', function () {
            return view('cuscatlan.strategy_cusca.index');
        });

        Route::get('/axisCuscatlan', function () {
            return view('cuscatlan.axis_cusca.index');
        });

        Route::get('/resultsCuscatlan', function () {
            return view('cuscatlan.results_cusca.index');
        });

        Route::get('/actionsCuscatlan', function () {
            return view('cuscatlan.actions_cusca.index');
        });

        Route::get('/trackingObservationsCuscatlan', function () {
            return view('cuscatlan.tracking_observation_cusca.index');
        });

        // Reports Cusca
        Route::get('/reportsCuscatlan', function () {
            return view('cuscatlan.reports_cusca.index');
        });

        // Graphics Cusca
        Route::get('/graphicsCuscatlan', function () {
            return view('cuscatlan.graphics_cusca.index');
        });
    });

    Route::group(['middleware'=> ['has.role:Administrador,Enlace,Auditor']], function () {
        Route::get('/indicators', function () {
            return view('cuscatlan.indicator.index');
        });

        Route::get('/departments', function () {
            return view('cuscatlan.department.index');
        });

        Route::get('/municipalities', function () {
            return view('cuscatlan.municipality.index');
        });

        Route::get('/trackingCuscatlan', function () {
            return view('cuscatlan.tracking_cusca.index');
        });

        Route::get('/reports', function () {
            return view('cuscatlan.reports.index');
        });

        Route::get(
            '/generatePdf/{ou_name}/{month_name}/{value}/{planification_name}/{type_name}',
            [PDFController::class, 'generatePdf']
        );

        Route::resource('/api/indicator', IndicatorController::class);
        Route::resource('/api/institution', InstitutionController::class);
        Route::resource('/api/unit', UnitController::class);
        Route::resource('/api/organizationalUnit', OrganizationalUnitController::class);
        Route::resource('/api/department', DepartmentController::class);
        Route::resource('/api/municipality', MunicipalityController::class);
        Route::resource('/api/trakingStatus', TrakingStatusController::class);
        Route::resource('/api/month', MonthController::class);
        Route::get('/api/month/tracking', [MonthController::class, 'indexTracking']);
        Route::resource('/api/year', YearController::class);
        Route::resource('/api/actionsCusca', ActionsCuscaController::class);
        // Route::resource('/api/trackingObservationCusca', TrackingObservationCuscaController::class);
        Route::resource('/api/trackingCusca', TrackingCuscaController::class);

        Route::resource('/api/user', UserController::class);
        Route::resource('/api/role', RoleController::class);
    });

    //Excel
    Route::get('export', [ExcelController::class, 'export']);
    Route::get('/home', [HomeController::class, 'index'])->name('home');
});

Route::post('import', [ExcelController::class, 'import']);
