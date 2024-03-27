import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await response.json();
      setProduct(result);
    };

    getProduct();
  }, []);
  return (
    <div>
      <h2>Product Detail Page</h2>
      {product ? (
        <div>
          <img src={product.thumbnail} alt="Product" />
          <h3>{product.title}</h3>
          <h3>$ {product.price}</h3>
          <p>{product.description}</p>
        </div>
      ) : (
        // this is not the right way to do loading, create a separate state for this
        // This is temporary solution for breadcrumbs tutorial
        <p>Loading...</p>
      )}
    </div>
  );
}
