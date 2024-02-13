import React from "react";
import { Container, Text, Price} from "./styled";

interface ProductProps {
  imgSrc: string;
  name: string;
  coast: string;
}

export const Product = ({ imgSrc, name, coast }: ProductProps) => {
  return (
    <Container>
      <img src={imgSrc} width={280} height={293} alt="productPicture" />
      <Text>{name}</Text>
      <Price>{coast}</Price>
    </Container>
  );
};
