import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <div>
          <img
            src={"../" + process.env.PUBLIC_URL + "footerlogo.png"}
            alt="이미지오류"
            width="250px"
          ></img>
        </div>
        <div>
          <InfoBox>이름 : 김관휘</InfoBox>
          <InfoBox>
            이메일 주소 : rhksgnl11@naver.com | 깃허브 주소 :
            https://github.com/gwanhwikim
          </InfoBox>
          <InfoBox>전화번호 : 010-3270-5634</InfoBox>
          <InfoBox>주소 : 고양시 덕양구 백양로 126 1105동 904호</InfoBox>
        </div>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #495057;
  margin-top: 150px;
  display: flex;
  justify-content: center;
`;

const FooterBox = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
`;

const InfoBox = styled.div`
  color: #e2e2e2;
  line-height: 2;
  font-weight: 600;
`;
