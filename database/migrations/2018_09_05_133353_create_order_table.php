<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('restaurant_id');
            $table->integer('user_id');
            $table->double('price');
            $table->double('trans_fee');
            $table->double('sum_price');
            $table->integer('status');
            $table->timestamps();
        });

        Schema::create('order_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('order_id');
            $table->integer('food_id');
            $table->text('name');
            $table->double('quality');
            $table->double('price');
            $table->timestamps();
        });
        Schema::create('order_option_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('order_detail_id');
            $table->integer('option_id');
            $table->text('option_name');
            $table->integer('sub_option_id');
            $table->text('sub_option_name');
            $table->integer('quality');
            $table->double('price');
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
        Schema::dropIfExists('orders');
        Schema::dropIfExists('order_details');
        Schema::dropIfExists('order_option_details');
    }
}
