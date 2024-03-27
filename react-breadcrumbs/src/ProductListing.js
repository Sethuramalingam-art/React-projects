import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductListing() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProducts(result.products);
    };

    getAllProducts();
  }, []);

  return (
    <div>
      <h2>ProductListing</h2>
      {products?.map((product) => {
        return (
          <>
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.price}</p>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
}
