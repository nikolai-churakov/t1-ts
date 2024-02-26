import React from "react";
import { SmallProduct } from "../../../components/Product";
import locale from "../../../locale/locale";
import {
  Container,
  ContainerColor,
  HSpan,
  H3Span,
  Hr,
  H2Span,
  ProductContainer,
  NumberofPAgeNextStepWrapper,
  NextStep,
} from "./styled";

const PRODUCTS = [
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
  {
    text: "Sneakers",
  },
];

export const Carousel = () => {
  return (
    <Container id='Carousel'>
      <ContainerColor>
        <HSpan>We will select the perfect product for you</HSpan>

        <H3Span>
          Answer three questions and we will send you a catalog with the most
          suitable products for you.
        </H3Span>

        <Hr />

        <H2Span>What type of product are you considering?</H2Span>

        <ProductContainer>
          {PRODUCTS.map(({ text }, id) => (
            <SmallProduct key={id} text={text} />
          ))}
        </ProductContainer>

        <Hr />

        <NumberofPAgeNextStepWrapper>
          <H3Span>1 of 2</H3Span>
          <NextStep>{locale.Carousel.NextStep}</NextStep>
        </NumberofPAgeNextStepWrapper>
      </ContainerColor>
    </Container>
  );
};
