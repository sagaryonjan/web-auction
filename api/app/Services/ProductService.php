<?php

namespace App\Services;


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
    public function bidNow ($product, $request)
    {
        try {
            $this->db->beginTransaction();

            $this->productBid->create([
                'product_id' => $product->id,
                'user_id'    => $request->get('user_id'),
                'price' => $request->get('bid_amount'),
            ]);

            $this->autoBiddingProduct($product, $request)

            $product->update(['bid_price' => $request->get('price')]);

            $this->db->commit();

            return $product;

        } catch (\Exception $exception) {
            $this->db->rollBack();
            throw $exception;
        }
    }

    public function autoBiddingProduct($product, $request) {
        if($product->auto_bid_user) {
            $this->productBid->create([
                'product_id' => $product->id,
                'user_id'    => $product->auto_bid_user,
                'price' => $request->get('bid_amount') + 1,
            ]);
        }
    }
}