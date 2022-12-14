<?php

namespace App\Models\Cuscatlan;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StrategyCusca extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'strategy_cusca';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id',
        'description_strategy',
        //'executed',
        'user_id',
        'organizational_units_id',
        'programmatic_objectives_id',
    ];
    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public $timestamps = false;

}
