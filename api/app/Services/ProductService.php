<?php

namespace App\Services;


use Illuminate\Support\Arr;
use App\Events\UserBidProduct;
use App\Models\ProductBid;
use Illuminate\Database\DatabaseManager;

class ProductService
{
    private DatabaseManager $db;

    private ProductBid $productBid;

    public function __construct(
        DatabaseManager $db,
        ProductBid $productBid
    ) {
        $this->db = $db;
        $this->productBid = $productBid;
    }

    /**
     * Product bid now
     *
     * @param $product
     * @param $request
     * @return mixed
     * @throws \Throwable
     */
    public function bidNow($users, $product, $request)
    {
        try {
            $this->db->beginTransaction();


            $attributes = [
                'product_id'    => $product->id,
                'user_id'       => $request->get('user_id'),
                'price'         => $request->get('bid_amount'),
            ];
            $this->productBid->create($attributes);
            
            if($product->auto_bid_user) {
                $productBid = $this->autoBiddingProduct($product, $request);
                $attributes['price'] = $productBid->price;
            }

            $product->bid_price = $attributes['price'];
            if($request->get('auto_biding')) 
                $product->auto_bid_user = $request->get('user_id');
            $product->save();

            $userId = $product->auto_bid_user ? $product->auto_bid_user : $request->get('user_id');
            event(new UserBidProduct(
                Arr::first($users, fn ($value, $key) => $value['id'] == $userId),
                $attributes['price']
            ));

            $this->db->commit();

            return $product;

        } catch (\Exception $exception) {
            $this->db->rollBack();
            \Log::info($exception->getMessage());
        }
    }

    public function autoBiddingProduct($product, $request) {
        return $this->productBid->create([
            'product_id' => $product->id,
            'user_id'    => $product->auto_bid_user,
            'price' => $request->get('bid_amount') + 1,
        ]);
    }
}