import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const MyInfo = ({ modalOpen }) => {
  const history = useHistory();
  const product = useFetch(
    `http://localhost:3001/product?user_id=${
      JSON.parse(sessionStorage.getItem("loginInfo"))[0].id
    }`
  );

  const logOut = () => {
    sessionStorage.clear();
    history.push("/");
    modalOpen(false);
  };

  const modalClose = () => {
    modalOpen(false);
  };

  const myProduct = product.map((item) => {
    const cutName = item.product_name.split("");
    const a = [];
    for (var i = 0; i < 15; i++) {
      a.push(cutName[i]);
    }
    const b = a.join("") + "...";
    return (
      <MyProductList onClick={modalClose} key={item.id}>
        <div style={{ width: "250px", marginLeft: "20px" }}>
          <Link to={`../allproduct/${item.id} `}>
            {item.product_name.length < 15 ? item.product_name : b}
          </Link>
        </div>
        <div style={{ fontSize: "17px" }}> {item.product_date}</div>
      </MyProductList>
    );
  });

  return (
    <InfoDiv>
      <Introduce>
        <span style={{ fontWeight: "600" }}>
          {JSON.parse(sessionStorage.getItem("loginInfo"))[0].name}
        </span>
        님 안녕하세요!
      </Introduce>

      <br />
      <div style={{ marginTop: "15px", width: "380px" }}>
        <Label>내가 올린 상품리스트</Label>
      </div>

      <MyProductList>
        <div style={{ color: "#ff985b", fontSize: "18px" }}>상품제목</div>
        <div
          style={{ color: "#ff985b", fontSize: "18px", marginRight: "10px" }}
        >
          등록날짜
        </div>
      </MyProductList>
      <div style={{ overflowY: "scroll", height: "250px" }}>{myProduct}</div>
      <LogOutBtn onClick={logOut}> 로그아웃 </LogOutBtn>
    </InfoDiv>
  );
};

export default MyInfo;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Introduce = styled.div`
  font-size: 25px;
  font-weight: 400;
  color: #6d6e6f;
  display: flex;
  justify-content: center;
`;

const MyProductList = styled.div`
  width: 380px;
  border-bottom: 1px solid #e2e2e2;
  font-size: 15px;
  font-weight: 700;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

const LogOutBtn = styled.button`
  width: 350px;
  height: 40px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 20px;
  background-color: black;
  color: white;
`;
