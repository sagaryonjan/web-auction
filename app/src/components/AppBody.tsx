
import { useState } from "react";

import Login from "./Login";
import NavBar from "./NavBar";
import Products from "./Products";
import { Product } from "../interfaces";
import ProductDetail from "./ProductDetail";
import { isUserLoggedIn } from "../services/auth";
import { HOMEPAGE, PRODUCT_DETAIL, LOGIN } from "../constants/route";

const AppBody = () => {

  const [route, setRoute] = useState(isUserLoggedIn() ? HOMEPAGE : LOGIN);
  const [product, setProduct] = useState<Product | null>(null);

  const handleProductBidNow = (product: Product) => {
    setProduct(product);
    setRoute(PRODUCT_DETAIL);
  };

  const redirectToHomePage = () => setRoute(HOMEPAGE);
  const redirectToLogin = () => setRoute(LOGIN);

  return (
    <>
      <NavBar handeLogoutRoute={redirectToLogin} />
      {route === HOMEPAGE && <Products handleProductBidNow={handleProductBidNow} />}
      {(route === PRODUCT_DETAIL && product !== null) && <ProductDetail product={product} />}
      {route === LOGIN && <Login handleLoginSubmitRoute={redirectToHomePage} />}
    </>
  );
};

export default AppBody;
