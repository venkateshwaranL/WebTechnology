import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="products">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Home;