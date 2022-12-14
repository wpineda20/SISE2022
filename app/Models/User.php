<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    public $incrementing = false;

    protected $fillable = [
        'id',
        'user_name',
        'name',
        'job_title',
        'phone',
        'email',
        'password',
        'organizational_units_id',
        // 'institution_id',
        'email_verified_at',
    ];

    protected $hidden = [
        'password',
        'created_at',
        'updated_at',
        'remember_token',
        'email_verified_at',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function sendEmailVerificationNotification()
    {
        $this->notify(new \App\Notifications\VerifyEmailQueued);
    }

    public function objectives()
    {
        return $this->hasMany(User::class);
    }

}
