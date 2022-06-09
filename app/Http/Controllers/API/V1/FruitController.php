<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\API\ApiController;
use App\Http\Repositories\FruitsRepository;
use App\Http\Requests\StockBalanceRequest;
use App\Models\Fruit;

class FruitController extends ApiController
{
    protected $repository;

    public function __construct(FruitsRepository $repository)
    {
        $this->repository = $repository;
    }

    public function calculateStockBalance(Fruit $fruit, StockBalanceRequest $request)
    {
        $fruit->update($request->all());
        return response()->json($fruit);
    }
}
