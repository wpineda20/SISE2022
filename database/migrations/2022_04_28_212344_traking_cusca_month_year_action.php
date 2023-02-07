<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TrakingCuscaMonthYearAction extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('traking_cusca_month_year_action', function (Blueprint $table) {
            $table->id();

            $table->foreignId('actions_cusca_id')->references('id')->on('actions_cusca');
            $table->foreignId('year_id')->references('id')->on('years');
            $table->foreignId('month_id')->references('id')->on('months');
            $table->foreignId('traking_status_id')->references('id')->on('traking_statuses');
            $table->text('tracking_detail')->default("");
            $table->integer('number_actions')->nullable()->default(0);
            $table->string('executed')->default("NO");
            $table->string('observation', 500)->default("");
            $table->string('reply', 500)->nullable()->default("");

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
        Schema::dropIfExists('traking_cusca_month_year_action');
    }
}
