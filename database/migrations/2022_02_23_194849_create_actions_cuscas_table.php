<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActionsCuscasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actions_cusca', function (Blueprint $table) {
            $table->id();
            $table->text('action_description');
            $table->integer('year_goal_actions');
            $table->string('responsable_name');
            $table->string('verification_method');
            $table->string('data_source');
            $table->double('budget_executed', 8, 2);
            $table->foreignId('created_user_id')->references('id')->on('users')->nullable();
            $table->foreignId('user_id')->references('id')->on('users');
            $table->foreignId('results_cusca_id')->references('id')->on('results_cusca');
            $table->foreignId('unit_id')->references('id')->on('units');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('actions_cusca');
    }
}
