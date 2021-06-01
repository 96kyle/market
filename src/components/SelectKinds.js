import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SelectKinds = ({ productKinds }) => {
  const renderKinds = productKinds.map((v) => {
    return (
      <Link to={"/kindproduct/" + v.loca} key={v.loca}>
        <KindBtn className="btn">{v.kind}</KindBtn>
      </Link>
    );
  });
  return (
    <KindContainer>
      <h1>어떤 종류의 상품을 찾으세요?</h1>
      {renderKinds}
    </KindContainer>
  );
};

export default SelectKinds;

const KindContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const KindBtn = styled.button`
  width: 500px;
`;
