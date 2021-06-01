import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const Menubar = ({ modalOpen }) => {
  const users = useFetch("http://localhost:3001/user");

  const onSubmit = (e) => {
    e.preventDefault();

    const filtering = users.filter((user) => {
      return user.id === idRef.current.value && user.pw === pwRef.current.value;
    });

    if (filtering.length === 0) {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      idRef.current.value = "";
      pwRef.current.value = "";
    } else {
      sessionStorage.setItem("loginInfo", JSON.stringify(filtering));
      modalClose();
    }
  };

  const idRef = useRef(null);
  const pwRef = useRef(null);

  const modalClose = () => {
    modalOpen(false);
  };

  return (
    <>
      <FormBox id="loginForm" onSubmit={onSubmit}>
        <div>
          <InputBox type="text" placeholder="아이디" ref={idRef}></InputBox>
          <br />
          <InputBox
            type="password"
            placeholder="패스워드"
            ref={pwRef}
          ></InputBox>
        </div>
        <br />
        <LoginBtn>로그인</LoginBtn>
        <br />
        <br />
        <div style={{ borderBottom: "solid 1px #e2e2e2" }}></div>
        <br />
        <div style={{ fontSize: "14px", fontWeight: "600" }}>
          아직 회원이 아니세요?
        </div>
        <div>
          <br />
          <Link to="/signup" style={{ marginRight: "10px", display: "inline" }}>
            <LoginBtn type="button" onClick={modalClose}>
              회원가입
            </LoginBtn>
          </Link>
        </div>
      </FormBox>
    </>
  );
};

export default Menubar;

const FormBox = styled.form`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.input`
  width: 350px;
  height: 40px;
  margin: 10px 0px 10px 0px;
  border: none;
  border-bottom: solid 1px #ebebeb;
`;

const LoginBtn = styled.button`
  width: 350px;
  height: 50px;
  font-size: 20px;
  border-radius: 20px;
  background-color: #ffc459;
  color: white;
  font-weight: 600;
  margin-top: 10px;
`;
