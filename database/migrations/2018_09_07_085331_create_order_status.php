<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderStatus extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('order_statuses', function(Blueprint $table)
        {
            $table->increments('id');
            $table->text('color');
            $table->timestamps();
        });
        Schema::create('order_status_translations', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('name');
            $table->integer('order_status_id')->unsigned();
            $table->string('locale')->index();

            $table->unique(['order_status_id','locale']);
            $table->foreign('order_status_id')->references('id')->on('order_statuses')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_statuses');
        Schema::dropIfExists('order_status_translations');
    }
}
