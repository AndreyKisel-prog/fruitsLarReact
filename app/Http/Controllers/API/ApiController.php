<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Model;

abstract class ApiController extends Controller
{
    protected $repository;

    public function index()
    {
        return response()->json($this->repository->getAll());
    }

}
