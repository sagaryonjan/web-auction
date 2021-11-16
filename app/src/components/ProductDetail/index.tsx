import { Product } from "../../interfaces";
import TimeLeftCounter from './TimeLeftCounter';

interface ProductDetailProps {
    product: Product
}

const ProductDetail = ({ product }: ProductDetailProps) => {

    const onClickBidNow = () => { };

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
                            <div className="form-group">
                                <label className="mb-2">Enter your Bid Amount:</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="mt-4">
                                <a onClick={onClickBidNow} className="btn btn-primary">
                                    Bid Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
