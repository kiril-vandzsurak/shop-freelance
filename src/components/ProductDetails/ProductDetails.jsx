import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <h3>Product ID: {productId}</h3>
    </div>
  );
};

export default ProductDetails;
