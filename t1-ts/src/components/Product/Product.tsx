import React from "react";
import styled from "styled-components";
import productImg from "../../imgs/productImg.jpg";

const ProductCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 273px;
  height: 358px;
  border-radius: 4px;
  margin-right: 20px;
`;

const ProductCartText = styled.div`
  font-size: 16px;
  color: #000000;
  &:hover {
    color: #f14f4f;
  }
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 3px;
`;

const ProductCardPrice = styled.div`
  font-size: 20px;
  color: #000000;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-align: left;
  color: #000000;
  cursor: pointer;
  justify-content: center;
`;

function Product() {
  return (
    <ProductCartContainer>
      <img src={productImg} width={280} height={293} alt="productPicture" />
      <ProductCartText>Nike Air Force 1 '07 QS</ProductCartText>
      <ProductCardPrice>110 $</ProductCardPrice>
    </ProductCartContainer>
  );
}

export default Product;
