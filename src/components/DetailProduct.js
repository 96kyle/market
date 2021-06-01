import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import FalseLikesIcon from "../icon/FalseLikesIcon";
import TrueLikesIcon from "../icon/TrueLikesIcon";

const DetailProduct = ({ setModalOpen }) => {
  const product_id = useParams().id;
  const product = useFetch(`http://localhost:3001/product?id=${product_id}`);
  const product1 = useFetch(`http://localhost:3001/product/${product_id}`);

  const history = useHistory();

  const upLike = () => {
    const splitLikes = product1.likes.split("/");
    if (sessionStorage.length === 0) {
      alert("로그인이 필요합니다");
      setModalOpen(true);
    } else if (
      splitLikes.filter((v) => {
        return v === JSON.parse(sessionStorage.getItem("loginInfo"))[0].id;
      }).length === 0
    ) {
      fetch(`http://localhost:3001/product/${product_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...product1,
          likes:
            product1.likes +
            "/" +
            JSON.parse(sessionStorage.getItem("loginInfo"))[0].id,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("좋아요 하였습니다.");
          window.location.reload();
        }
      });
    }
  };

  const noLike = () => {
    alert("이미 좋아요한 상품입니다.");
  };

  const renderProduct = product.map((v) => {
    const price = String(v.product_price).split("");
    price.splice(price.length - 3, 0, ",");
    const renderPrice = price.join("");

    return (
      <DetailProductBox key={v.id}>
        <div>
          <ImgBox
            src={v.product_image}
            alt="이미지오류"
            width="600"
            height="450"
          />
        </div>
        <ProductInfo>
          <IdBox>{v.user_id}</IdBox>
          <AreaContainer>
            {v.area1} {v.area2}
          </AreaContainer>
          <div
            style={{
              borderBottom: "1px solid #e2e2e2",
              margin: "10px 0px 10px 0px",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "450px" }}>
              <NameBox>{v.product_name}</NameBox>
              <KindBox>
                {v.product_kind}∙{v.product_date}
              </KindBox>
            </div>
            <div>
              <PriceBox>{renderPrice}원</PriceBox>
            </div>
          </div>
          <ContentBox id="content">
            <p>{v.product_content}</p>
          </ContentBox>
          <LikesBox>
            <TrueLikesIcon id="trueLike" onClick={noLike} />
            <FalseLikesIcon id="falseLike" onClick={upLike} />
            관심 {v.likes.split("/").length}
          </LikesBox>
        </ProductInfo>
      </DetailProductBox>
    );
  });

  const deleteProduct = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/product/${product_id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          history.push("/");
        }
      });
    }
  };

  useEffect(() => {
    if (sessionStorage.length === 0) {
    } else if (product1.length !== 0) {
      if (
        product1.likes.indexOf(
          JSON.parse(sessionStorage.getItem("loginInfo"))[0].id
        ) > -1
      ) {
        document.getElementById("trueLike").style.display = "block";
        document.getElementById("trueLike").style.marginRight = "10px";
        document.getElementById("falseLike").style.display = "none";
      }
    }
  }, [renderProduct, product1]);

  useEffect(() => {
    if (sessionStorage.length === 0) {
      document.getElementById("Btn").style.display = "none";
      document.getElementById("buy").style.display = "block";
    } else if (
      JSON.parse(sessionStorage.getItem("loginInfo"))[0].id === product1.user_id
    ) {
      document.getElementById("Btn").style.display = "block";
      document.getElementById("buy").style.display = "none";
    } else {
      document.getElementById("Btn").style.display = "none";
      document.getElementById("buy").style.display = "block";
    }
  });

  const buyProduct = () => {
    if (sessionStorage.length === 0) {
      alert("로그인이 필요합니다.");
      setModalOpen(true);
    } else if (window.confirm("귀하의 연락처가 판매자에게 공개됩니다.")) {
      history.push("/sendmail/" + product_id);
    }
  };

  return (
    <div>
      <DetailProductContainer>
        {renderProduct}

        <br />
        <div id="Btn">
          <Link to={"/updateproduct/" + product_id}>
            <BuyBtn
              style={{
                marginRight: "5px",
                width: "410px",
                height: "50px",
                borderRadius: "5px",
              }}
              id="updateBtn"
            >
              수정
            </BuyBtn>
          </Link>
          <BuyBtn
            style={{
              marginLeft: "5px",
              width: "185px",
              height: "50px",
              backgroundColor: "#b5b4b4",
              borderRadius: "5px",
            }}
            id="deleteBtn"
            onClick={deleteProduct}
          >
            삭제
          </BuyBtn>
        </div>
        <BuyBtn id="buy" onClick={buyProduct}>
          구매문의하기
        </BuyBtn>
      </DetailProductContainer>
    </div>
  );
};

export default DetailProduct;

const DetailProductContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailProductBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductInfo = styled.div`
  width: 600px;
`;

const ImgBox = styled.img`
  border-radius: 15px;
  margin-bottom: 10px;
`;

const IdBox = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 2;
`;

const AreaContainer = styled.div`
  font-size: 13px;
  color: #868e96;
  line-height: 2;
`;

const NameBox = styled.div`
  font-size: 23px;
  font-weight: 700;
  line-height: 2;
`;

const KindBox = styled.div`
  font-size: 13px;
  color: #868e96;
  line-height: 2;
`;

const PriceBox = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #ff8a3d;
  line-height: 2;
`;

const ContentBox = styled.div`
  font-size: 18px;
  line-height: 3;
`;

const LikesBox = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: gray;
  display: flex;
  align-items: center;
  line-height: 2;
`;

const BuyBtn = styled.button`
  width: 600px;
  height: 60px;
  font-size: 20px;
  border-radius: 20px;
  border: none;
  background-color: #f37676;
  color: white;
  font-weight: 600;
  margin-top: 30px;
  cursor: pointer;
`;
