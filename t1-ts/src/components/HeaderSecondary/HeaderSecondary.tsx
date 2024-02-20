import React from "react";
import locale from "../../locale/locale";
import { useSelector, useDispatch } from "react-redux";
import { changePage, PAGES } from "../../redux/shopSlice";

import {
  Container,
  Menu,
  LogoName,
  MenuButtons,
  Button,
  HorizontalLine,
  BigSiteLogoText,
  Title,
  Description,
} from "./styled";

export const HeaderSecondary = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Menu>
        <LogoName onClick={() => dispatch(changePage(PAGES.CATALOG))}>
          {locale.header.logo}
        </LogoName>

        <MenuButtons>
          <Button onClick={() => dispatch(changePage(PAGES.CATALOG))}>
            {locale.header.menu.catalog}
          </Button>

          <Button>{locale.header.menu.aboutUs}</Button>

          <Button>{locale.header.menu.productSelection}</Button>

          <Button>{locale.header.menu.outTeam}</Button>

          <Button>{locale.header.menu.FAQ}</Button>

          <Button onClick={() => dispatch(changePage(PAGES.PRODUCTS_LIST))}>
            {locale.header.menu.BackToSite}
          </Button>
        </MenuButtons>

        <HorizontalLine />
      </Menu>

      <Title>{locale.header.title}</Title>

      <Description>{locale.header.description}</Description>

      <BigSiteLogoText>{locale.header.logo}</BigSiteLogoText>
    </Container>
  );
};
