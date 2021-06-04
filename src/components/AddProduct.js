import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { storageService } from "../FilebaseInit";

const AddProduct = ({ productKinds }) => {
  const [attachment, setAttachment] = useState();
  const history = useHistory();

  const productKindRender = productKinds.map((v) => {
    return <option key={v.kind}>{v.kind}</option>;
  });

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onsubmit = async (e) => {
    e.preventDefault();

    const date = new Date();

    const fileref = storageService
      .ref()
      .child(
        `/PZJujnQkZxdrWv1JnyLFitX5JVD3/${
          date.getTime() + JSON.parse(sessionStorage.getItem("loginInfo"))[0].id
        }`
      );
    const response = await fileref.putString(attachment, "data_url");
    const downloadImage = await response.ref.getDownloadURL();

    fetch("http://localhost:3001/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:
          date.getTime() +
          JSON.parse(sessionStorage.getItem("loginInfo"))[0].id,
        product_date:
          date.getFullYear() +
          "-" +
          String(Number(date.getMonth()) + 1) +
          "-" +
          date.getDate(),
        product_name: productNameRef.current.value,
        product_kind: productKindRef.current.value,
        product_price: Number(productPriceRef.current.value),
        user_id: JSON.parse(sessionStorage.getItem("loginInfo"))[0].id,
        product_content: productContentRef.current.value,
        product_image: downloadImage,
        area1: JSON.parse(sessionStorage.getItem("loginInfo"))[0].area1,
        area2: JSON.parse(sessionStorage.getItem("loginInfo"))[0].area2,
        likes: JSON.parse(sessionStorage.getItem("loginInfo"))[0].id,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("상품 추가가 완료되었습니다.");
        history.push("/");
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productKindRef = useRef(null);
  const productNameRef = useRef(null);
  const productPriceRef = useRef(null);
  const productContentRef = useRef(null);

  return (
    <SignUpContainer>
      <FormBox onSubmit={onsubmit}>
        <InputContainer>
          <Label>글 제목</Label>
          <br />
          <InputBox placeholder="제목" ref={productNameRef}></InputBox>
        </InputContainer>
        <InputContainer>
          <Label>카테고리</Label>
          <br />
          <SelectBox ref={productKindRef}>
            <option>원하시는 카테고리를 선택해주세요</option>
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
        <InputContainer>
          <Label>이미지 첨부</Label>
          <br />
          <input
            style={{ marginTop: "10px" }}
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />
          <br />
          <br />
          <Label>이미지 미리보기</Label>
          <br />
          {attachment && (
            <img
              src={attachment}
              width="250px"
              height="250px"
              alt="이미지오류"
            />
          )}
        </InputContainer>
        <InputContainer style={{ display: "flex", justifyContent: "center" }}>
          <Btn type="submit">추가하기</Btn>
        </InputContainer>
      </FormBox>
    </SignUpContainer>
  );
};

export default AddProduct;

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
