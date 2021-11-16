import { Product } from "../../interfaces";
import BidProduct from "./BidProduct";
import TimeLeftCounter from './TimeLeftCounter';

interface ProductDetailProps {
    product: Product
}

const ProductDetail = ({ product }: ProductDetailProps) => {

    return (
        <>
            <div className="product-info mt-5">
                <div className="container">
                    <div className="row">
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
                            <h2>Current bid: ${product.bid_price}</h2>
                            <hr />

                            <TimeLeftCounter endDateTimestampMs={product.end_date_timestamp} />

                            <div className="">
                                <span>Auction ends:</span>
                                <p> {product.end_date}</p>
                            </div>

                            <BidProduct product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
