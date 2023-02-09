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
use App\Http\Controllers\Cuscatlan\CronClosingController;
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

Auth::routes(['verify' => true, 'remember_me' => false]);

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::group(['middleware' => ['has.role:Administrador,Enlace,Auditor']], function () {

        // User & Roles
        Route::get('/api/role/user', [RoleController::class, 'getActualUserRoles']);
        Route::post('/api/user/actualUser', [UserController::class, 'actualUser']);

        Route::resource('/api/user', UserController::class);
        Route::resource('/api/role', RoleController::class);

        // Reports Cusca
        Route::get('/reportsCuscatlan', function () {
            return view('cuscatlan.reports_cusca.index');
        });

        // Reports
        // Route::get('/reports', function () {
        //     return view('reports.index');
        // });

        // PDF Mensual
        Route::get('pdf/mensual', [PDFController::class, 'generateMensualPDF']);
        // PDF Acumulado
        Route::get('pdf/acumulado', [PDFController::class, 'generateAcumuladoPDF']);
        // PDF Despacho
        Route::get('pdf/despacho', [PDFController::class, 'generateDespachoPDF']);
    });

    Route::get('/', function () {
        return view('home');
    });

    Route::group(['middleware' => ['has.role:Administrador,Auditor']], function () {

        // Apis Administración
        Route::resource('/api/month', MonthController::class);
        Route::resource('/api/year', YearController::class);
        Route::resource('/api/period', PeriodController::class);
        Route::resource('/api/institution', InstitutionController::class);
        Route::resource('/api/direction', DirectionController::class);
        Route::resource('/api/organizationalUnit', OrganizationalUnitController::class);
        Route::resource('/api/unit', UnitController::class);
        Route::resource('/api/trakingStatus', TrakingStatusController::class);
        Route::resource('/api/indicator', IndicatorController::class);
        Route::get('/api/month/tracking', [MonthController::class, 'indexTracking']);
        Route::post('/api/month/monthsAllowed', [MonthController::class, 'monthsAllowed']);
        Route::resource('/api/monthlyClosing', MonthlyClosingController::class);
        Route::resource('/api/cronClosing', CronClosingController::class);

        // Apis Plan Cuscatlan
        Route::resource('/api/axisCusca', AxisCuscaController::class);
        Route::resource('/api/programmaticObjective', ProgrammaticObjectiveController::class);
        Route::resource('/api/strategyCusca', StrategyCuscaController::class);
        Route::resource('/api/resultsCusca', ResultsCuscaController::class);
        Route::resource('/api/actionsCusca', ActionsCuscaController::class);
        Route::resource('/api/trackingCusca', TrackingCuscaController::class);


        // Views
        Route::get('/months', function () {
            return view('cuscatlan.month.index');
        });

        Route::get('/years', function () {
            return view('cuscatlan.year.index');
        });

        Route::get('/periods', function () {
            return view('cuscatlan.period.index');
        });

        Route::get('/institutions', function () {
            return view('cuscatlan.institution.index');
        });

        Route::get('/directions', function () {
            return view('cuscatlan.direction.index');
        });

        Route::get('/organizationalUnits', function () {
            return view('cuscatlan.organizational_unit.index');
        });

        Route::get('/units', function () {
            return view('cuscatlan.unit.index');
        });

        Route::get('/trakingStatus', function () {
            return view('cuscatlan.traking_status.index');
        });

        Route::get('/indicators', function () {
            return view('cuscatlan.indicator.index');
        });

        Route::get('/users', function () {
            return view('cuscatlan.user.index');
        });

        Route::get('/axisCuscatlan', function () {
            return view('cuscatlan.axis_cusca.index');
        });

        Route::get('/programmaticObjective', function () {
            return view('cuscatlan.programmatic_objective.index');
        });

        Route::get('/strategyCusca', function () {
            return view('cuscatlan.strategy_cusca.index');
        });

        Route::get('/resultsCuscatlan', function () {
            return view('cuscatlan.results_cusca.index');
        });

        Route::get('/actionsCuscatlan', function () {
            return view('cuscatlan.actions_cusca.index');
        });

        Route::get('/trackingCuscatlan', function () {
            return view('cuscatlan.tracking_cusca.index');
        });

        Route::get('/monthlyClosings', function () {
            return view('cuscatlan.monthly_closing.index');
        });

        Route::get('/cronClosing', function () {
            return view('cuscatlan.cron_closing.index');
        });
    });

    Route::group(['middleware' => ['has.role:Administrador,Auditor,Enlace']], function () {

        // Apis
        Route::get('/api/month/tracking', [MonthController::class, 'indexTracking']);
        Route::resource('/api/trakingStatus', TrakingStatusController::class);
        Route::resource('/api/actionsCusca', ActionsCuscaController::class);
        Route::resource('/api/trackingCusca', TrackingCuscaController::class);

        // Views
        Route::get('/trackingCuscatlan', function () {
            return view('cuscatlan.tracking_cusca.index');
        });

        // Reports Cusca
        Route::get('/reportsCuscatlan', function () {
            return view('cuscatlan.reports_cusca.index');
        });

        // PDF
        // Route::get('api/pdf', [PDFController::class, 'generatePDF']);
    });

    //Excel
    Route::get('export', [ExcelController::class, 'export']);
    Route::get('/home', [HomeController::class, 'index'])->name('home');
});

Route::post('import', [ExcelController::class, 'import']);
