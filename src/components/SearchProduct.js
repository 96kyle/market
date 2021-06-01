import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Container from "./Container";
import Product from "./Product";

const SearchProduct = () => {
  const keyword = useParams().keyword.replace(/(\s*)/g, "");
  const product = useFetch("http://localhost:3001/product");

  const renderProduct = product
    .filter((item) => {
      return item.product_name.indexOf(keyword) > -1;
    })
    .map((item) => {
      return (
        <Link to={`../allproduct/${item.id} `}>
          <div key={item.product_id}>
            <Product item={item} />
          </div>
        </Link>
      );
    });
  return <Container renderProduct={renderProduct} />;
};

export default SearchProduct;
