<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMonAnPhu extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("food_options",function (Blueprint $table){
            $table->increments('id');
            $table->integer('food_id');
            $table->boolean('one_or_more');
            $table->timestamps();
        });

        Schema::create('food_option_translations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('food_option_id')->unsigned();
            $table->string('locale')->index();
            $table->string('note')->nullable();

            $table->unique(['food_option_id', 'locale']);
            $table->foreign('food_option_id')->references('id')->on('food_options')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create("sub_options",function (Blueprint $table){
            $table->increments('id');
            $table->integer('food_option_id');
            $table->float('price');
            $table->timestamps();
        });

        Schema::create('sub_option_translations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('sub_option_id')->unsigned();
            $table->string('locale')->index();

            $table->unique(['sub_option_id', 'locale']);
            $table->foreign('sub_option_id')->references('id')->on('sub_options')->onDelete('cascade');
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
        Schema::dropIfExists('food_option_translations');
        Schema::dropIfExists('sub_option_translations');
        Schema::dropIfExists('food_options');
        Schema::dropIfExists('sub_options');
    }
}
