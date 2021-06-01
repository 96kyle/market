import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "../icon/SearchIcon";
import UserIcon from "../icon/UserIcon";
import Login from "./Login";
import Modal from "./Modal";
import MyInfo from "./MyInfo";

const Header = ({ modalOpen, setModalOpen, modalOpen1, setModalOpen1 }) => {
  const [keyword, setKeyword] = useState("");

  const history = useHistory();

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal1 = () => {
    setModalOpen1(true);
  };
  const closeModal1 = () => {
    setModalOpen1(false);
  };

  const search = (e) => {
    e.preventDefault();
    history.push(`/search/${keyword}`);
    setKeyword("");
  };

  useEffect(() => {
    if (sessionStorage.length > 0) {
      document.getElementById("loginBtn").style.display = "none";
      document.getElementById("userInfo").style.display = "block";
    } else {
      document.getElementById("loginBtn").style.display = "block";
      document.getElementById("userInfo").style.display = "none";
    }
  });

  const loginCheck = () => {
    if (sessionStorage.length === 0) {
      alert("로그인이 필요합니다");
      openModal();
    } else {
      history.push("/addproduct");
    }
  };

  return (
    <>
      <HeaderContainer>
        <HeaderBox>
          <Modal open={modalOpen} close={closeModal} header="로그인">
            <Login modalOpen={setModalOpen} />
          </Modal>
          <Modal open={modalOpen1} close={closeModal1} header="내 정보">
            <MyInfo modalOpen={setModalOpen1} />
          </Modal>

          <div>
            <Link to="/">
              <img
                src={"../" + process.env.PUBLIC_URL + "mainlogo.png"}
                alt="이미지오류"
                width="150px"
              />
            </Link>
          </div>
          <div>
            <FormBox onSubmit={search}>
              <InputBox
                placeholder="동네이름, 물품명을 검색해보세요"
                onChange={(e) => setKeyword(e.target.value)}
                value={keyword}
              />
              <SearchIcon onClick={search} />
            </FormBox>
          </div>
          <div style={{ marginLeft: "70px" }}>
            <Button onClick={loginCheck}>상품 판매하기</Button>
          </div>
          <UserDiv>
            <div style={{ marginLeft: "30px" }}>
              <Button id="loginBtn" onClick={openModal}>
                로그인/회원가입
              </Button>
            </div>
            <div style={{ marginLeft: "30px" }}>
              <UserIcon id="userInfo" onClick={openModal1} />
            </div>
          </UserDiv>
        </HeaderBox>
      </HeaderContainer>
      <hr />
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: solid 1px black;
`;

const HeaderBox = styled.div`
  width: 1000px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormBox = styled.form`
  width: 400px;
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

const InputBox = styled.input`
  width: 350px;
  height: 40px;
  font-size: 17px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 6px;
  background-color: #ffc459;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

const UserDiv = styled.div`
  width: 200px;
`;
