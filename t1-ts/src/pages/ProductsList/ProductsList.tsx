import React, { useEffect, useState, useCallback } from "react";
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
import { HeaderSecondary } from "../../components/HeaderSecondary";

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

// interface dataProps {
//   id: string;
//   name: string;
//   email: string;
// }

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface IProductResponse<T> {
  limit: number;
  products: T[];
  skip: number;
  total: number;
}

const isError = "json not responsed";

export const ProductsList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      // Мой сервер с ответом
      // .get("https://jsonplaceholder.typicode.com/users")

      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <HeaderSecondary />
      <Search />
      <ContainerBody>
        <ProductContainer>
          {/* {PRODUCTS.map(({ imgSrc, name, coast }) => (
            <Product imgSrc={imgSrc} name={name} coast={coast} />
          ))} */}

          <h1>Данные получены c сервера:</h1>
          {isError && <div>Any whon here</div>}
          {/* Ответ моего сервера */}
          {/* <ul>
            {data.map((user: dataProps) => (
              <li key={user.id}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul> */}

          <ul>
            {/* {data.products &&
              data.products.map((product: IProduct) => (
                <li key={product.id}>
                  {product.brand} ({product.title}) ({product.price})
                </li>
              ))} */}
          </ul>

          <ShowMoreButton>{locale.catalog.parameters.showMore}</ShowMoreButton>
        </ProductContainer>
      </ContainerBody>
    </Container>
  );
};
