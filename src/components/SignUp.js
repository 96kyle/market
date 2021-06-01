import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import AreaBox from "./AreaBox";

const SignUp = ({ area0, area1 }) => {
  const [idCheck, setIdCheck] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [pwReCheck, setPwReCheck] = useState("");
  const [possibleId, setPossibleId] = useState(false);
  const [possibleNick, setPossibleNick] = useState(false);

  const users = useFetch("http://localhost:3001/user");

  const history = useHistory();

  useEffect(() => {
    const idChecking = document.getElementById("signUpId").value;
    if (idChecking.length < 6) {
      document.getElementById("warnId").style.display = "block";
      document.getElementById("warnId").textContent = "6자리 이상 입력해주세요";
    } else {
      document.getElementById("warnId").textContent = "사용가능";
    }
  }, [idCheck]);

  useEffect(() => {
    const pwChecking = document.getElementById("signUpPw").value;
    if (pwChecking.length < 8) {
      document.getElementById("warnPw").style.display = "block";
      document.getElementById("warnPw").textContent = "8자리 이상 입력해주세요";
    } else {
      document.getElementById("warnPw").textContent = "사용가능";
    }
  }, [pwCheck]);

  useEffect(() => {
    const pwReChecking = document.getElementById("signUpPwCheck").value;
    if (pwReChecking !== document.getElementById("signUpPw").value) {
      document.getElementById("warnPwCheck").style.display = "block";
      document.getElementById("warnPwCheck").textContent =
        "비밀번호가 일치하지않습니다.";
    } else {
      document.getElementById("warnPwCheck").textContent =
        "패스워드가 일치합니다.";
    }
  }, [pwReCheck]);

  const doubleCheckId = () => {
    if (
      users.filter((user) => {
        return user.id === idRef.current.value;
      }).length === 0 &&
      idRef.current.value.length >= 6
    ) {
      alert("사용가능한 아이디입니다.");
      setPossibleId(true);
    } else {
      alert("중복된 아이디가 있습니다.");
      setPossibleId(false);
    }
  };

  const doubleCheckNickname = () => {
    if (
      users.filter((user) => {
        return user.nickname === nicknameRef.current.value;
      }).length === 0
    ) {
      alert("사용가능한 닉네임입니다.");
      setPossibleNick(true);
    } else {
      alert("중복된 닉네임이 있습니다.");
      setPossibleNick(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (possibleId === false) {
      alert("아이디 중복확인 해주세요");
    } else if (possibleNick === false) {
      alert("닉네임 중복확인 해주세요");
    } else if (
      idRef.current.value.length >= 6 &&
      pwRef.current.value.length >= 8 &&
      pwRef.current.value === repwRef.current.value
    ) {
      const areaValue = area0.filter((v) => {
        return v.index === Number(areaRef1.current.value);
      })[0].name;

      fetch("http://localhost:3001/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: idRef.current.value,
          pw: pwRef.current.value,
          name: nameRef.current.value,
          nickname: nicknameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          area1: areaValue,
          area2: areaRef2.current.value,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("회원가입이 정상적으로 처리되었습니다.");
          history.push("/");
        }
      });
    } else {
      alert("회원정보를 다시 확인해주세요");
    }
  };

  const idRef = useRef(null);
  const pwRef = useRef(null);
  const repwRef = useRef(null);
  const nameRef = useRef(null);
  const nicknameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const areaRef1 = useRef(null);
  const areaRef2 = useRef(null);

  return (
    <SignUpContainer>
      <FormBox onSubmit={onSubmit}>
        <div>
          <Label>성명</Label>
          <InputBox placeholder="Name" ref={nameRef}></InputBox>

          <WarnMsg>한글 성명 입력하여주세요</WarnMsg>
        </div>
        <div style={{ marginLeft: "78px" }}>
          <Label>닉네임</Label>
          <InputBox placeholder="Nickname" ref={nicknameRef}></InputBox>
          <CheckBtn type="button" onClick={doubleCheckNickname}>
            중복확인
          </CheckBtn>
          <WarnMsg>8자리 이하로 입력하여주세요</WarnMsg>
        </div>
        <div style={{ marginLeft: "78px" }}>
          <Label>아이디</Label>
          <InputBox
            id="signUpId"
            type="text"
            placeholder="ID"
            value={idCheck}
            onChange={(e) => setIdCheck(e.target.value)}
            ref={idRef}
          ></InputBox>
          <CheckBtn type="button" onClick={doubleCheckId}>
            중복확인
          </CheckBtn>
          <WarnMsg id="warnId"></WarnMsg>
        </div>

        <div>
          <Label>패스워드</Label>
          <InputBox
            id="signUpPw"
            type="password"
            placeholder="Password"
            value={pwCheck}
            onChange={(e) => setPwCheck(e.target.value)}
            ref={pwRef}
          ></InputBox>
          <WarnMsg id="warnPw"></WarnMsg>
        </div>

        <div>
          <Label>패스워드 확인</Label>
          <InputBox
            id="signUpPwCheck"
            type="password"
            placeholder="Password Check"
            value={pwReCheck}
            onChange={(e) => setPwReCheck(e.target.value)}
            ref={repwRef}
          ></InputBox>
          <WarnMsg id="warnPwCheck"></WarnMsg>
        </div>

        <div>
          <Label>이메일</Label>
          <InputBox placeholder="Email" ref={emailRef}></InputBox>
          <WarnMsg>정확히 입력해주세요</WarnMsg>
        </div>

        <div>
          <Label>전화번호</Label>
          <InputBox placeholder="Phone Number" ref={phoneRef}></InputBox>

          <WarnMsg>-를 포함하여 입력하여주세요</WarnMsg>
        </div>
        <div>
          <Label>지역</Label>
          <AreaBox
            area0={area0}
            area1={area1}
            areaRef1={areaRef1}
            areaRef2={areaRef2}
          />
        </div>
        <br />

        <Btn type="submit">회원가입</Btn>
      </FormBox>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputBox = styled.input`
  width: 500px;
  color: gray;
  height: 50px;
  border: none;
  border-bottom: solid 1px #e2e2e2;
  background-color: #f8f9fa;
  font-size: 17px;
  margin-top: 10px;
`;

const WarnMsg = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 12px;
`;

const Label = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

const CheckBtn = styled.button`
  width: 70px;
  height: 40px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #cecece;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Btn = styled.button`
  width: 350px;
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
