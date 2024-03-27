import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    const getPRoducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setTrendingProducts(result.products.slice(0, 6));
    };

    getPRoducts();
  }, []);
  return (
    <div>
      <h2>Home</h2>
      <span>Trending Products</span>
      {trendingProducts.map((product) => {
        return (
          <>
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </Link>
            </div>
          </>
        );
      })}
      <Link to="/products">View All Products</Link>
    </div>
  );
}
