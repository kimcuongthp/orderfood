<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddToRestaurantTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('restaurants', function (Blueprint $table) {
//            $table->tinyInteger('status')->default(1);
        });
        Schema::table('restaurant_translations', function (Blueprint $table) {
            $table->string('alert')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
}
