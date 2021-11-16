import React, {useState} from "react";
import { Product } from "../../interfaces";
import {bidProduct} from "../../services/product";

interface BidProductProps {
    product: Product
}

const BidProduct = ({product}: BidProductProps) => {

    const [bidAmount, setBidAmount] = useState<string | null>(null);

    const onClickBidNow = async () => {

        if(bidAmount) {
            await bidProduct(product.id, {bid_amount: bidAmount})
        }
    };

    return (
        <>
            <div className="form-group">
                <label className="mb-2">Enter your Bid Amount:</label>
                <input type="number" onChange={(e) => setBidAmount(e.target.value)} className="form-control" />
            </div>
            <div className="mt-4">
                <a href="javascript:void(0)" onClick={onClickBidNow} className="btn btn-primary">
                    Bid Now
                </a>
            </div>
        </>
    );
};

export default BidProduct;
