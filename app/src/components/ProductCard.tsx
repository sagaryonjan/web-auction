import { Product } from "../interfaces";

interface ProductCardProp {
  product: Product,
  handleProductBidNow: Function
}

const ProductCard = ({ product, handleProductBidNow }: ProductCardProp) => {

  const onClickProductBidNow = () => {
    handleProductBidNow(product);
  }

  return (
    <>
      <div className="col-xs-1 col-sm-6 col-md-4">
        <div className="card shadow border-0">
          <img
            className="card-img-top"
            src={product.image}
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Current Bid: ${product.bid_price}</p>
            <a onClick={onClickProductBidNow} className="btn btn-primary">
              Bid Now
            </a>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Auction ends: {product.end_date}
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
