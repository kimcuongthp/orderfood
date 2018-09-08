<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTagTablw extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags', function (Blueprint $table)
        {
            $table->increments('id');
            $table->string('name');
        });
        Schema::create('tag_translation', function (Blueprint $table)
        {
            $table->integer('restaurant_id');
            $table->integer('tag_id');
            $table->string('locale');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tag_translation');
        Schema::dropIfExists('tags');
    }
}
