import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changePage, PAGES } from '../../redux/shopSlice'
import {Container, MenuContainer, LogoName, MenuButtons, Button} from "./styled";

export const Footer = () => {

  const dispatch = useDispatch()

  return (
    <Container>
      <MenuContainer>
        <LogoName onClick={() => dispatch(changePage(PAGES.CATALOG))}>Goods4you</LogoName>

        <MenuButtons>
          <Button>Catalog</Button>

          <Button>About us</Button>

          <Button>Product selection</Button>

          <Button>Out team</Button>

          <Button>FAQ</Button>
        </MenuButtons>
      </MenuContainer>
    </Container>
  );
}
