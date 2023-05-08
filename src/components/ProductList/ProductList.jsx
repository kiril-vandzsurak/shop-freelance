import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import { uploadCategoryData } from "../../redux/actions";
import { useEffect } from "react";

const ProductList = ({ searchQuery }) => {
  const products = [
    { id: 1, name: "Product 1", img: "/logo-shop.png", category: "men" },
    { id: 2, name: "Product 2", img: "/logo-shop.png", category: "women" },
    { id: 3, name: "Product 3", img: "/logo-shop.png", category: "men" },
  ];

  const dispatch = useDispatch();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProductsMen = filteredProducts.filter(
    (product) => product.category === "men"
  );

  const filteredProductsWomen = filteredProducts.filter(
    (product) => product.category === "women"
  );

  useEffect(() => {
    dispatch(uploadCategoryData(filteredProductsMen, filteredProductsWomen));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {filteredProducts.length > 0 ? (
        <div className="d-flex">
          {filteredProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              style={{ textDecoration: "none" }}
              state={{ product }}
            >
              <ProductCard
                key={product.id}
                name={product.name}
                img={product.img}
              />
            </Link>
          ))}
        </div>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
