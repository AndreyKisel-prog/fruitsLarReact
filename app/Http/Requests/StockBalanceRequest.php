<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StockBalanceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'stock_balance' => 'integer|min:0|max:10',
        ];
    }

    public function messages()
    {
        return [
            'stock_balance.min' => 'Остаток должен быть не менее 0',
            'stock_balance.max' => 'Остаток должен быть не более 10',
        ];
    }

}
