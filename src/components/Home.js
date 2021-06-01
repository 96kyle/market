import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <FirstContainer style={{ backgroundColor: "rgb(255 247 238)" }}>
        <MainDiv style={{ marginLeft: "70px" }}>
          <h1>
            당근마켓에 올라온
            <br /> 모든 상품을
            <br />
            확인해보세요
          </h1>
          <Link to="/allproduct">
            <Button>전체상품 보러가기</Button>
          </Link>
        </MainDiv>
        <div style={{ marginLeft: "100px", marginTop: "145px" }}>
          <img
            src={process.env.PUBLIC_URL + "/rabbit.png"}
            alt="이미지 오류"
            width="450px"
          />
        </div>
      </FirstContainer>
      <FirstContainer>
        <div style={{ marginRight: "100px" }}>
          <img
            src={process.env.PUBLIC_URL + "/city.png"}
            alt="이미지 오류"
            width="470px"
          />
        </div>
        <MainDiv>
          <h1>
            동네 상품 정보를 <br></br> 확인해보세요
          </h1>
          <Link to="/areaproduct">
            <Button>지역별 상품 보러가기</Button>
          </Link>
        </MainDiv>
      </FirstContainer>
      <FirstContainer style={{ backgroundColor: "#E6F3E6" }}>
        <MainDiv style={{ marginRight: "50px" }}>
          <h1>
            원하는 종류의 <br></br> 상품을 확인해보세요
          </h1>
          <Link to="/selectkinds">
            <Button>종류별 상품 보러가기</Button>
          </Link>
        </MainDiv>
        <div
          style={{ marginTop: "203px", marginLeft: "50px", display: "inline" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/hobby.png"}
            alt="이미지 오류"
            width="400px"
          />
        </div>
      </FirstContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FirstContainer = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const MainDiv = styled.div`
  width: 300px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 6px;
  background-color: #e2e2e2;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;
