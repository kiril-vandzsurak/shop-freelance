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

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const productChunks = chunkArray(filteredProducts, 3);

  return (
    <div>
      <h1>Product List</h1>
      {filteredProducts.length > 0 ? (
        <div>
          {productChunks.map((chunk, index) => (
            <div
              key={index}
              className="d-flex justify-content-around"
              style={{
                width: "90%",
                marginInline: "auto",
                marginBottom: "20px",
              }}
            >
              {chunk.map((product) => (
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
          ))}
        </div>
      ) : (
        <p>Product wasn't found</p>
      )}
    </div>
  );
};

export default ProductList;
