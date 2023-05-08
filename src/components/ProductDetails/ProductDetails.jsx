import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

const ProductDetails = () => {
  const { productId } = useParams();
  const location = useLocation();
  const { product } = location.state;

  return (
    <div>
      <h1>Product Details</h1>
      <h3>Product ID: {productId}</h3>
      <h3>Product Name: {product.name}</h3>
      <h3>Product Category: {product.category}</h3>
      <img src={product.img} alt={product.name} />
      <Button>Buy</Button>
    </div>
  );
};

export default ProductDetails;
