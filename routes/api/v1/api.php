<?php

use App\Http\Controllers\Api\V1\FruitController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'fruits'], function () {
    Route::get('',  [FruitController::class, 'index']);
    Route::patch('/{fruit}', [FruitController::class, 'calculateStockBalance']);
});
