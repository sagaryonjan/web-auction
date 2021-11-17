<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;
use App\Services\ProductService;
use App\Services\UserService;
use Illuminate\Support\Arr;
use Illuminate\Validation\Rule;


class ProductController extends Controller
{
    private $productService;

    private $userService;

    public function __construct(
        ProductService $productService,
        UserService $userService
    )
    {
        $this->productService = $productService;
        $this->userService = $userService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return ProductResource::collection(Product::all());
    }

    /**
     * Product bid now
     *
     * @param Request $request
     * @param Product $product
     * @return ProductResource
     * @throws \Throwable
     */
    public function bidNow(Product $product, Request $request)
    {
        $this->bidNowValidation($product, $request);
        
        $this->productService->bidNow($product, $request);

        return new ProductResource($product);
    }

    /**
     * Bid now validation
     */
    private function bidNowValidation(Product $product, Request $request) 
    {
        $users = $this->userService->getUsers();

        $request->validate([
            'bid_amount' => [
                'required',
                function ($attribute, $value, $fail) use ($product) {
                    if (!($value > $product->bid_price)) {
                        $fail('Bid amount must be more then current bid amount.');
                    }
                },
        
            ],
            'user_id' => [
                'required',
                Rule::in(Arr::pluck($users, 'id'))
            ], 
        ]);
    }

}
