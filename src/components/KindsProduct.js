import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Container from "./Container";
import Product from "./Product";

const KindsProduct = ({ productKinds }) => {
  const kind = useParams().kinds;
  const product = useFetch("http://localhost:3001/product");

  const kindFilter = productKinds.filter((v) => {
    return v.loca === kind;
  });

  const renderProduct = product
    .filter((item) => {
      return item.product_kind === kindFilter[0].kind;
    })
    .sort((a, b) => {
      return b.likes.split("/").length - a.likes.split("/").length;
    })
    .map((item) => {
      return (
        <Link to={`../allproduct/${item.id} `} key={item.id}>
          <div key={item.product_id}>
            <Product item={item} />
          </div>
        </Link>
      );
    });

  return <Container renderProduct={renderProduct} />;
};

export default KindsProduct;
