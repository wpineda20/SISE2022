<?php

namespace App\Models\Cuscatlan;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ActionsCusca extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'actions_cusca';

    public $incrementing = true;

    protected $data = ['deleted_at'];

    protected $fillable = [
        'id',
        'action_description',
        'year_goal_actions',
        'responsable_name',
        'verification_method',
        'data_source',
        'budget_executed',
        'created_user_id',
        'user_id',
        'results_cusca_id',
        'unit_id'
    ];
    public $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];
    public $timestamps = false;
}
