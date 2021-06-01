import React from "react";
import styled from "styled-components";

const Product = ({ item }) => {
  const price = String(item.product_price).split("");
  price.splice(price.length - 3, 0, ",");
  const renderPrice = price.join("");

  const cutName = item.product_name.split("");
  const a = [];
  for (var i = 0; i < 15; i++) {
    a.push(cutName[i]);
  }
  const b = a.join("") + "...";

  return (
    <ProductCard>
      <ImgProduct
        src={item.product_image}
        alt="이미지오류"
        width="250"
        height="250"
      />
      <Name>{item.product_name.length < 15 ? item.product_name : b}</Name>
      <Area>
        {item.area1} {item.area2}
      </Area>
      <Price>{renderPrice}원</Price>
    </ProductCard>
  );
};

export default Product;

const ProductCard = styled.div`
  margin: 50px 30px 50px 30px;
`;

const ImgProduct = styled.img`
  border-radius: 10px;
`;

const Name = styled.div`
  width: 250px;
  line-height: 2;
  font-size: 20px;
  font-weight: 700;
`;

const Price = styled.div`
  line-height: 2;
  font-size: 18px;
  font-weight: 600;
  color: #ff8a3d;
`;

const Area = styled.div`
  line-height: 1;
  color: #999;
  font-size: 14px;
  font-weight: 600;
`;
