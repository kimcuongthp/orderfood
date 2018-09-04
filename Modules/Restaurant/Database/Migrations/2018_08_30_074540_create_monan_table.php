<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMonanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Danh mục lọai món
        Schema::create('typeoffoods', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('restaurant_id')->nullable();
            $table->timestamps();
        });

        Schema::create('typeoffood_translations', function(Blueprint $table){
            $table->increments('id');
            $table->string('name');
            $table->integer('typeoffood_id')->unsigned();
            $table->string('locale')->index();

            $table->unique(['typeoffood_id', 'locale']);
            $table->foreign('typeoffood_id')->references('id')->on('typeoffoods')->onDelete('cascade');
        });

        Schema::create('foods', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('typeoffood_id')->nullable();
            $table->float('price')->nullable();
            $table->string('image')->nullable();
            $table->integer('number_of_order')->nullable();
            $table->integer('status')->nullable();

            $table->timestamps();
        });

        Schema::create('food_translations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('food_id')->unsigned();
            $table->string('locale')->index();
            $table->string('description1')->nullable();
            $table->string('description2')->nullable();

            $table->unique(['food_id', 'locale']);
            $table->foreign('food_id')->references('id')->on('foods')->onDelete('cascade');
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
        Schema::dropIfExists('typeoffood_translations');
        Schema::dropIfExists('food_translations');
        Schema::dropIfExists('typeoffoods');
        Schema::dropIfExists('foods');
    }
}
