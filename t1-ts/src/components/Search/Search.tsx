import React, { useEffect, useState, useCallback, EventHandler } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Button } from "../ActiveButton/styled";
import locale from "../../locale/locale";
import { setProducts } from "../../redux/shopSlice";
import { ActiveButton } from "../ActiveButton";

import {
  SearchContainer,
  H1div,
  SearchDiv,
  ButtonWrapper,
  InputWrapper,
  Input,
} from "./styled";

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

export const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  console.log(value);
  const handleClick = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        dispatch(setProducts((response.data as IProductResponse).products));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <SearchContainer>
      <H1div>All products</H1div>
      <SearchDiv>
        <InputWrapper>
          <Input value={value} onChange={handleChange}></Input>
        </InputWrapper>
        <ButtonWrapper>
          <ActiveButton
            onClick={handleClick}
            text={locale.productList.Search}
          />
        </ButtonWrapper>
      </SearchDiv>
    </SearchContainer>
  );
};
