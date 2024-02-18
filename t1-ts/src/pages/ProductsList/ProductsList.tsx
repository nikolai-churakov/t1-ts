import React from "react";
import { Header } from "../Catalog/Header";
import { Search } from "../../components/Search/";
import { Body } from "../Catalog/Body";

import { Container } from "../Catalog/styled";

export const ProductsList = () => {
  return (
    <Container>
      <Header />
      <Search />
      <Body />
    </Container>
  );
};
