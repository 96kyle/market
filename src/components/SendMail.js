import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import emailjs from "emailjs-com";
import styled from "styled-components";

const SendMail = () => {
  const product_id = useParams().product_id;

  const product = useFetch(`http://localhost:3001/product/${product_id}`);
  const user = useFetch(`http://localhost:3001/user/${product.user_id}`);

  const history = useHistory();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "Gwanhwi",
        "template_zvggtra",
        e.target,
        "user_JYpFGWVbzOITDPFICXUgQ"
      )
      .then(
        (result) => {
          alert("전송완료!");
          history.push("/");
        },
        (error) => {
          alert("전송오류가 발생하였습니다. 다시 시도해주세요");
        }
      );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SignUpContainer>
      <FormBox onSubmit={sendEmail}>
        <InputBox
          style={{ display: "none" }}
          type="text"
          placeholder="ninkname"
          name="nickname"
          value={JSON.parse(sessionStorage.getItem("loginInfo"))[0].nickname}
          readOnly="readOnly"
        ></InputBox>

        <InputBox
          style={{ display: "none" }}
          type="text"
          placeholder="product_name"
          name="product_name"
          value={product.product_name || ""}
          readOnly="readOnly"
        ></InputBox>
        <InputBox
          style={{ display: "none" }}
          type="email"
          placeholder="email"
          value={user.email || ""}
          readOnly="readOnly"
          name="email"
        ></InputBox>
        <InputContainer>
          <Label>문의 제목</Label>
          <br />
          <InputBox
            type="text"
            placeholder="구매문의 제목을 작성해주세요"
            name="subject"
          ></InputBox>
        </InputContainer>
        <InputBox
          style={{ display: "none" }}
          type="text"
          placeholder="phone"
          name="phone"
          value={JSON.parse(sessionStorage.getItem("loginInfo"))[0].phone}
          readOnly="readOnly"
        ></InputBox>
        <InputContainer>
          <Label>문의내용</Label>
          <br />
          <TextAreaBox
            type="text"
            placeholder="구매 문의 내용을 작성해주세요"
            name="content"
            cols="70"
            rows="20"
          ></TextAreaBox>
        </InputContainer>
        <InputContainer style={{ display: "flex", justifyContent: "center" }}>
          <Btn type="submit" value="Send Message">
            전송하기
          </Btn>
        </InputContainer>
      </FormBox>
    </SignUpContainer>
  );
};

export default SendMail;

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
  margin-top: 20px;
`;

const InputBox = styled.input`
  width: 650px;
  height: 50px;
  border: none;
  background-color: #f8f9fa;
  border-bottom: solid 1px #e2e2e2;
  font-size: 17px;
  margin-top: 10px;
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
