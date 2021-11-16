import { useEffect, useState } from "react";

import { Product } from "../interfaces";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../services/product";

interface ProductsProps {
  handleProductBidNow: Function
}

const Products = ({ handleProductBidNow }: ProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => { getProducts(); }, []);

  const getProducts = async () => {
    const data = await fetchProducts();
    setProducts(data.data.data);
  }

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          {products.map((product: Product) => {
            return (
              <ProductCard key={product.id} product={product} handleProductBidNow={handleProductBidNow} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
