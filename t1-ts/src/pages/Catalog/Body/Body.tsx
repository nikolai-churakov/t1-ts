import React from "react";

import { Product } from "../../../components/Product";
import locale from "../../../locale/locale";
import productImg from "../../../images/productImg.jpg";

import {
  Container,
  Catalog,
  Title,
  CatalogParameters,
  CategoryText,
  CategoryItems,
  Item,
  ApplyButton,
  ResetButton,
  ProductContainer,
  ShowMoreButton,
  SelectionText,
} from "./styled";

const ITEMS: string[] = [
  "smartphones",
  "laptops",
  "sneakers",
  "sneakers",
  "sneakers",
  "sneakers",
  "sneakers",
  "sneakers",
];
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

export const Body = () => {
  return (
    <Container>
      <Catalog>
        <Title>{locale.catalog.title}</Title>

        <CatalogParameters>
          <SelectionText>
            Selection <br /> by parameters
          </SelectionText>

          <CategoryText>{locale.catalog.parameters.category}</CategoryText>

          <CategoryItems>
            {ITEMS.map((name) => (
              <Item>{name}</Item>
            ))}
          </CategoryItems>

          <ApplyButton>{locale.catalog.parameters.apply}</ApplyButton>

          <ResetButton>{locale.catalog.parameters.reset}</ResetButton>
        </CatalogParameters>
      </Catalog>

      <ProductContainer>
        {PRODUCTS.map(({ imgSrc, name, coast }) => (
          <Product imgSrc={imgSrc} name={name} coast={coast} />
        ))}

        <ShowMoreButton>{locale.catalog.parameters.showMore}</ShowMoreButton>
      </ProductContainer>
    </Container>
  );
};
