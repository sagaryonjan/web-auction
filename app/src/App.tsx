import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <Products /> */}
      <ProductDetail />
    </div>
  );
};

export default App;
