import React, { useEffect, useState, useCallback } from "react";
import { Search } from "../../components/Search/";
import locale from "../../locale/locale";
import productImg from "../../images/productImg.jpg";
import axios from "axios";
import { Container } from "../Catalog/styled";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/shopSlice";
import type { RootState } from "../../redux/store";
import { ContainerBody, ProductContainer, ShowMoreButton } from "./styled";
import { HeaderSecondary } from "../../components/HeaderSecondary";

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
  const products = useSelector((state: RootState) => state.shop.products);

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
