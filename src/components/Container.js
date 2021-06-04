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
          <NoProduct>
            <div style={{ width: "300px", marginLeft: "300px" }}>
              등록된상품이 없습니다...
            </div>
            <div style={{ marginTop: "200px" }}>
              <img
                src={"../" + process.env.PUBLIC_URL + "Noproduct.png"}
                alt="이미지오류"
                width="350px"
              />
            </div>
          </NoProduct>
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
  width: 1000px;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
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
