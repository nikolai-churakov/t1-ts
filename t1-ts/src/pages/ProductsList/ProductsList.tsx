import React, { useEffect, useState, useCallback } from "react";
import { Header } from "../Catalog/Header";
import { Search } from "../../components/Search/";
import locale from "../../locale/locale";
import productImg from "../../images/productImg.jpg";
import axios from "axios";
import { Container } from "../Catalog/styled";

import {
  ContainerBody,
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

interface dataProps {
  id: string;
  name: string;
  email: string;
}

export const ProductsList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Header />
      <Search />
      <ContainerBody>
        <ProductContainer>
          {/* {PRODUCTS.map(({ imgSrc, name, coast }) => (
            <Product imgSrc={imgSrc} name={name} coast={coast} />
          ))} */}

          <h1>Список пользователей:</h1>
          <ul>
            {data.map((user: dataProps) => (
              <li key={user.id}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>

          <ShowMoreButton>{locale.catalog.parameters.showMore}</ShowMoreButton>
        </ProductContainer>
      </ContainerBody>
    </Container>
  );
};
