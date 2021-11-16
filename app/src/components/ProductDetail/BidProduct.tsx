import { useState } from "react";
import { HTTP_UNPROCESSABLE_ENTITY } from "../../constants/responseCode";
import { Product } from "../../interfaces";
import { bidProduct } from "../../services/product";
import { defaultMessagBag, MessageBag, setSuccessMsg } from "../../utils/messageBag";

interface BidProductProps {
    product: Product
}

const BidProduct = ({ product }: BidProductProps) => {

    const [bidAmount, setBidAmount] = useState<number>(product.bid_price + 1);
    const [error, setError] = useState<string>('');

    const onSubmitBidNow = async (e: any) => {
        e.preventDefault();

        const error = bidAmountValidation();
        if (error.status) { setError(error.message); return; }

        try {
            await bidProduct(product.id, { bid_amount: bidAmount })
        } catch (error: any) {
            if (error?.response?.status === HTTP_UNPROCESSABLE_ENTITY) {
                const [errorMsg] = error.response.data.errors.bid_amount;

                setError(errorMsg);
            }
        }
    };

    const bidAmountValidation = (): MessageBag => {
        if (!bidAmount)
            return setSuccessMsg('Bid amount must not be empty.');

        if (!(bidAmount > product.bid_price))
            return setSuccessMsg('Bid amount must be more then current bid amount.');

        return defaultMessagBag;
    }

    const onChangeBidAmount = (e: any) => {
        setBidAmount(e.target.value);
    }

    return (
        <form onSubmit={onSubmitBidNow}>
            <div className="form-group">
                <label className="mb-2">Enter your Bid Amount:</label>
                <input type="number"
                    required
                    value={bidAmount}
                    onChange={onChangeBidAmount}
                    className={`form-control ${error && 'is-invalid'}`} />
                {error && (<div className="invalid-feedback">{error}</div>)}

            </div>
            <div className="mt-4">
                <button type="submit" className="btn btn-primary">Bid Now</button>
            </div>
        </form>
    );
};

export default BidProduct;
