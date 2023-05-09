import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";

const ProductDetails = () => {
  const { productId } = useParams();
  const location = useLocation();
  const { product } = location.state;
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Product Details</h1>
      <h3>Product ID: {productId}</h3>
      <h3>Product Name: {product.name}</h3>
      <h3>Product Category: {product.category}</h3>
      <img src={product.img} alt={product.name} />
      <Button onClick={() => dispatch(addToCart(product))}>Buy</Button>
    </div>
  );
};

export default ProductDetails;
