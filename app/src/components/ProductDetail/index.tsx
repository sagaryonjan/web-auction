import BidProduct from "./BidProduct";
import { Product } from "../../interfaces";
import TimeLeftCounter from './TimeLeftCounter';
import CurrentBidAmount from './CurrentBidAmount';
import {useState} from "react";

interface ProductDetailProps {
    product: Product
}

const ProductDetail = ({ product }: ProductDetailProps) => {

    const [message, setMessage] = useState<string>('');

    const productBiddingSuccessfully = () => {
        if(product.auto_bid_user) {
            setMessage('User bid successfully. This product is auto bid by different user.');
            return;
        }
        setMessage('User bid successfully.');
    };

    return (
        <>
            <div className="product-info mt-5">
                <div className="container">
                    <div className="row">
                        {message && (
                            <div className="alert alert-primary" role="alert">
                                {message}
                            </div>
                        )}

                        <div className="col-xs-1 col-sm-6 col-md-6">
                            <div className="card shadow border-0">
                                <img
                                    className="card-img-top h-100"
                                    src={product.image}
                                    alt={product.title}
                                />
                            </div>
                        </div>

                        <div className="col-xs-1 col-sm-6 col-md-6">


                            <p className="text-muted">
                                {product.description}
                            </p>
                            <CurrentBidAmount product={product} />
                            <hr />

                            <TimeLeftCounter endDateTimestampMs={product.end_date_timestamp} />

                            <div className="">
                                <span>Auction ends:</span>
                                <p> {product.end_date}</p>
                            </div>

                            <BidProduct product={product} productBiddingSuccessfully={productBiddingSuccessfully} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
