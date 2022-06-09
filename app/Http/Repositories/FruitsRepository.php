<?php

namespace App\Http\Repositories;

use App\Models\Fruit;
use Illuminate\Database\Eloquent\Model;

class FruitsRepository extends AbstractClassRepository
{
    protected Model $model;

    public function __construct(Fruit $model)
    {
        $this->model = $model;
    }
}
