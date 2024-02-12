import React from "react";
import styled from "styled-components";
import productImg2 from "../../imgs/productImg2.jpg";

const ProductCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 280px;
  height: 154x;
  border-radius: 4px;
  margin-right: 20px;
`;

const ProductCartText = styled.div`
  position: relative;
  top: -33px;
  left: 35px;
  font-size: 16px;
  color: #444b58;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 3px;
  &:hover {
    color: #f14f4f;
  }
  cursor: pointer;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  width: 24px;
  height: 24px;
  top: 5px;
  left: 0px;
`;

function Product() {
  return (
    <ProductCartContainer>
      <img src={productImg2} width={280} height={120} alt="productPicture" />
      <Input defaultChecked />
      <ProductCartText>Sneakers</ProductCartText>
    </ProductCartContainer>
  );
}

export default Product;
