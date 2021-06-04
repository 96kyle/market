import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import AreaBox from "./AreaBox";
import Container from "./Container";
import Product from "./Product";

const AreaProduct = ({ area0, area1 }) => {
  const [area, setArea] = useState([]);
  const product = useFetch("http://localhost:3001/product");

  const onsubmit = (e) => {
    e.preventDefault();
    const areaValue = area0.filter((v) => {
      return v.index === Number(areaRef1.current.value);
    })[0].name;
    setArea([areaValue, areaRef2.current.value]);
  };

  const renderProduct = product
    .filter((item) => {
      return item.area1 === area[0] && item.area2 === area[1];
    })
    .sort((a, b) => {
      return b.likes.split("/").length - a.likes.split("/").length;
    })
    .map((item) => {
      return (
        <Link to={`allproduct/${item.id} `} key={item.id}>
          <Product item={item}></Product>
        </Link>
      );
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const areaRef1 = useRef(null);
  const areaRef2 = useRef(null);

  return (
    <AreaContainer style={{ marginTop: "100px" }}>
      <div style={{ width: "1000px" }}>
        <h4>거주하시는 지역을 선택해주세요</h4>
        <FormBox onSubmit={onsubmit}>
          <AreaBox
            area0={area0}
            area1={area1}
            areaRef1={areaRef1}
            areaRef2={areaRef2}
          />
          <Btn>검색</Btn>
        </FormBox>
      </div>
      <Container renderProduct={renderProduct} />
    </AreaContainer>
  );
};

export default AreaProduct;

const AreaContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormBox = styled.form`
  width: 1000px;
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #d6d5d3;
  font-size: 22px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 7px;
`;
