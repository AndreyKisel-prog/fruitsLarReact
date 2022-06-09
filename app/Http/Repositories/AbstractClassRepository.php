<?php

namespace App\Http\Repositories;

use Illuminate\Database\Eloquent\Model;

abstract class AbstractClassRepository
{
    protected Model $model;

    public function getAll()
    {
        return $this->model->all();
    }
}
