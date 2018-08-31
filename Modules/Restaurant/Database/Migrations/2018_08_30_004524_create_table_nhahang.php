<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableNhahang extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        #Tạo bảng nhà hàng
        Schema::create('restaurants', function (Blueprint $table) {
            $table->increments('id');
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->string('image')->nullable();
            $table->string('video')->nullable();
            $table->string('time_open')->nullable();
            $table->string('time_close')->nullable();
            $table->tinyInteger('is_open')->default(1);
            $table->float('price_min')->nullable();
            $table->float('price_max')->nullable();
            $table->float('trans_fee')->nullable();
            $table->integer('district_id')->nullable();
            $table->integer('city_id');
            $table->integer('user_id');

            $table->timestamps();
        });
        Schema::create('restaurant_translations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('description')->nullable();
            $table->string('address')->nullable();
            $table->integer('restaurant_id')->unsigned();
            $table->string('locale')->index();

            $table->unique(['restaurant_id','locale']);
            $table->foreign('restaurant_id')->references('id')->on('restaurants')->onDelete('cascade');

        });

        #Tạo danh mục nhà hàng
        Schema::create('categories', function(Blueprint $table){
           $table->increments('id');
           $table->timestamps();
        });
        Schema::create('category_translations', function(Blueprint $table){
            $table->increments('id');
            $table->string('name');
            $table->integer('category_id')->unsigned();
            $table->string('locale')->index();

            $table->unique(['category_id', 'locale']);
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->timestamps();
        });

        #Tạo bảng relations
        Schema::create('restaurant_categories_relation', function(Blueprint $table)
        {
           $table->integer('restaurant_id');
           $table->integer('category_id');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        Schema::dropIfExists('restaurant_translations');
        Schema::dropIfExists('restaurants');
        Schema::dropIfExists('category_translations');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('restaurant_categories_relation');
    }
}
