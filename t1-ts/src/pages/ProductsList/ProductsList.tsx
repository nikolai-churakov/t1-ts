import React from "react";
import { Header } from "../Catalog/Header";
import { Search } from "../../components/Search/";
import locale from "../../locale/locale";
import productImg from "../../images/productImg.jpg"

import { Container } from "../Catalog/styled";

import {
  ContainerBody,
  Catalog,
  Title,
  // Item,
  // ApplyButton,
  ProductContainer,
  ShowMoreButton,
  // SelectionText,
} from "./styled";

const PRODUCTS = [
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
  {
    imgSrc: productImg,
    name: "Nike Air Force 1 '07 QS",
    coast: "110 $",
  },
];

export const ProductsList = () => {
  return (
    <Container>
      <Header />
      <Search />
      <ContainerBody>
        <Catalog>
          <Title>{locale.catalog.title}</Title>
        </Catalog>

        <ProductContainer>
          {/* {PRODUCTS.map(({ imgSrc, name, coast }) => (
            <Product imgSrc={imgSrc} name={name} coast={coast} />
          ))} */}

          <ShowMoreButton>{locale.catalog.parameters.showMore}</ShowMoreButton>
        </ProductContainer>
      </ContainerBody>
    </Container>
  );
};
