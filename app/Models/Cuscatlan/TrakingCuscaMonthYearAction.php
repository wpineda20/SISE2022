<?php

namespace App\Models\Cuscatlan;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TrakingCuscaMonthYearAction extends Model
{
    use HasFactory;
    use SoftDeletes;
    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $table = 'traking_cusca_month_year_action';

    protected $fillable = [
        'id',
        'actions_cusca_id',
        'year_id',
        'month_id',
        'traking_status_id',
        'executed',
        'tracking_detail',
        'number_actions',
        'observation',
        'reply',

    ];

    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = false;
}
