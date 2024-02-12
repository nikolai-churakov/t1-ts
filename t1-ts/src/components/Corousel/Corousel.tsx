import React from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import Product2 from "../Product/Product2";
const CorouselContainer = styled.div`
  z-index: 140;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1440px;
  height: 778px;
  position: relative;
`;

const CorouselContainerColor = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  background-color: #fff4ee;
  width: 1180px;
  height: 658px;
  position: relative;
`;

const HSpan = styled.div`
  position: relative;
  left: 101px;
  top: 40px;
  font-family: "JostBold";
  font-size: 30px;
  font-weight: 700;
  color: #444b58;
`;
const H3Span = styled.div`
  position: relative;
  left: 101px;
  top: 45px;
  font-family: "Jost";
  font-size: 16px;
  font-weight: 600;
  opacity: 0.5;
  color: #444b58;
`;

const Hr = styled.div`
  position: relative;
  top: 16px;
  width: 880px;
  height: 1px;
  background-color: #242424;
`;

const H2Span = styled.div`
  position: relative;
  left: 101px;
  top: 68px;
  font-family: "JostSemiBold";
  font-size: 24px;
  font-weight: 600;
  color: #444b58;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1180px;
  min-height: 350px;
  margin-top: 130px;
`;

function Corousel() {
  return (
    <CorouselContainer>
      <CorouselContainerColor>
        <HSpan>We will select the perfect product for you</HSpan>
        <H3Span>
          Answer three questions and we will send you a catalog with the most
          suitable products for you.
        </H3Span>
        <Hr />
        <H2Span>What type of product are you considering?</H2Span>
        <ProductContainer>
          <Product2 />
          <Product2 />
          <Product2 />
          <Product2 />
          <Product2 />
          <Product2 />
        </ProductContainer>
      </CorouselContainerColor>
    </CorouselContainer>
  );
}

export default Corousel;
