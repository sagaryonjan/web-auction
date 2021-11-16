import Products from "./Products";
import { useState } from "react";
import { HOMEPAGE, PRODUCT_DETAIL } from "../constants/route";
import ProductDetail from "./ProductDetail";
import {Product} from "../interfaces";

const AppBody = () => {

  const [route, setRoute] = useState(HOMEPAGE);
  const [product, setProduct] = useState<Product | null>(null);

  const handleProductBidNow = (product: Product) => {
    setProduct(product);
    setRoute(PRODUCT_DETAIL);
  };

  return (
    <>
      {route === HOMEPAGE && <Products handleProductBidNow={handleProductBidNow} />}
      {(route === PRODUCT_DETAIL && product !== null) && <ProductDetail product={product}/>}
    </>
  );
};

export default AppBody;
