import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Container from "./Container";
import Product from "./Product";
const AllProduct = () => {
  const product = useFetch("http://localhost:3001/product");

  const renderProduct = product
    .sort((a, b) => {
      return b.likes.split("/").length - a.likes.split("/").length;
    })
    .map((item) => {
      return (
        <Link to={`allproduct/${item.id} `} key={item.id}>
          <div>
            <Product item={item} />
          </div>
        </Link>
      );
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Container renderProduct={renderProduct} />
    </div>
  );
};

export default AllProduct;
