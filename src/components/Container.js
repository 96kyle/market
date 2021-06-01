import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = ({ renderProduct }) => {
  const [paging, setPaging] = useState(6);

  const a = renderProduct.length;
  const render = renderProduct.slice(0, paging);

  const plusNum = () => {
    setPaging(paging + 6);
  };

  useEffect(() => {
    if (a === paging || a < paging) {
      document.getElementById("pageBtn").style.display = "none";
    } else {
      document.getElementById("pageBtn").style.display = "block";
    }
  }, [paging, a]);

  console.log(render);

  return (
    <ProductContainer>
      <ProductBox>
        {render.length === 0 ? (
          <NoProduct>등록된상품이 없습니다...</NoProduct>
        ) : (
          render
        )}
      </ProductBox>
      <Btn id="pageBtn" onClick={plusNum}>
        더보기
      </Btn>
    </ProductContainer>
  );
};

export default Container;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 100px;
  width: 1000px;
  border-radius: 10px;
  background-color: white;
  border: solid 1px #e2e2e2;
`;

const NoProduct = styled.div`
  width: 500px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 200px 0px 200px 0px;
`;

const Btn = styled.button`
  width: 300px;
  height: 50px;
  font-size: 20px;
  border-radius: 20px;
  border: none;
  background-color: #cecece;
  color: white;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
`;
