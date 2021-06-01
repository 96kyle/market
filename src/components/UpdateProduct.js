import React, { useRef } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const UpdateProduct = ({ productKinds }) => {
  const product_id = useParams().id;
  const product = useFetch(`http://localhost:3001/product/${product_id}`);

  const history = useHistory();

  const productKindRender = productKinds.map((v) => {
    return <option key={v.kind}>{v.kind}</option>;
  });

  const update = (e) => {
    e.preventDefault();
    if (
      productKindRef.current.value === "선택하세요" ||
      productNameRef.current.value === "" ||
      productPriceRef.current.value === "" ||
      productContentRef.current.value === ""
    ) {
      alert("상품 정보를 모두 입력해주세요");
    } else {
      fetch(`http://localhost:3001/product/${product_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...product,
          product_kind: productKindRef.current.value,
          product_name: productNameRef.current.value,
          product_price: productPriceRef.current.value,
          product_content: productContentRef.current.value,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("상품이 수정되었습니다.");
          history.push("/");
        }
      });
    }
  };

  const productKindRef = useRef(null);
  const productNameRef = useRef(null);
  const productPriceRef = useRef(null);
  const productContentRef = useRef(null);

  return (
    <SignUpContainer>
      <FormBox onSubmit={update}>
        <InputContainer>
          <Label>글 제목</Label>
          <br />
          <InputBox placeholder="제목" ref={productNameRef}></InputBox>
        </InputContainer>
        <InputContainer>
          <Label>카테고리</Label>
          <br />
          <SelectBox ref={productKindRef}>
            <option>카테고리를 선택해주세요</option>
            {productKindRender}
          </SelectBox>
        </InputContainer>

        <InputContainer>
          <Label>가격</Label>
          <br />
          <InputBox
            placeholder="숫자만 입력해주세요"
            ref={productPriceRef}
          ></InputBox>
        </InputContainer>
        <InputContainer>
          <Label>설명</Label>
          <br />
          <TextAreaBox
            cols="70"
            rows="20"
            ref={productContentRef}
          ></TextAreaBox>
        </InputContainer>
        <InputContainer style={{ display: "flex", justifyContent: "center" }}>
          <Btn type="submit">수정하기</Btn>
        </InputContainer>
      </FormBox>
    </SignUpContainer>
  );
};

export default UpdateProduct;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-top: 30px;
`;

const InputBox = styled.input`
  width: 650px;
  color: gray;
  height: 50px;
  border: none;
  background-color: #f8f9fa;
  border-bottom: solid 1px #e2e2e2;
  font-size: 17px;
  margin-top: 10px;
`;

const SelectBox = styled.select`
  width: 655px;
  height: 50px;
  font-size: 17px;
  margin-top: 20px;
  border: solid 1px #e2e2e2;
  background-color: #f8f9fa;
  color: gray;
  cursor: pointer;
`;

const TextAreaBox = styled.textarea`
  font-size: 17px;
  font-weight: 500;
  margin-top: 20px;
  background-color: #f8f9fa;
  border: solid 1px #e2e2e2;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

const Btn = styled.button`
  width: 350px;
  height: 50px;
  font-size: 20px;
  border-radius: 20px;
  border: none;
  background-color: black;
  color: white;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
`;
