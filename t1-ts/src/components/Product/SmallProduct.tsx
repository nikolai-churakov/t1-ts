import React from "react";
import { SmallContainer, Input, CartText } from "./styled";

interface ProductProps {
  text: string;
}

export const SmallProduct = ({ text }: ProductProps) => {
  return (
    <SmallContainer>
      {/*  <img src={imgSrc} width={280} height={120} alt="productPicture"/> */}

      <Input defaultChecked />

      <CartText>{text}</CartText>
    </SmallContainer>
  );
};
