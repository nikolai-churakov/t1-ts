import React, { useEffect, useState, useCallback } from "react";
import { Search } from "../../components/Search/";
import locale from "../../locale/locale";
import productImg from "../../images/productImg.jpg";
import axios from "axios";
import { Container } from "../Catalog/styled";

import { ContainerBody, ProductContainer, ShowMoreButton } from "./styled";
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

interface IProductResponse {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

export const ProductsList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts((response.data as IProductResponse).products);
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
          <h1>Данные получены c сервера:</h1>
          <ul>
            {products.length !== 0 &&
              products.map((product: IProduct) => (
                <li key={product.id}>
                  {product.brand} ({product.title}) ({product.price})
                </li>
              ))}
          </ul>

          <ShowMoreButton>{locale.catalog.parameters.showMore}</ShowMoreButton>
        </ProductContainer>
      </ContainerBody>
    </Container>
  );
};
