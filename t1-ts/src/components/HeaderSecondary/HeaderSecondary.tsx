import React from "react";
import locale from "../../locale/locale";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
        <Link to="/" relative="path">
          <LogoName>{locale.header.logo}</LogoName>
        </Link>

        <MenuButtons>
          <Button>{locale.header.menu.catalog}</Button>

          <Button>{locale.header.menu.aboutUs}</Button>

          <Button>{locale.header.menu.productSelection}</Button>

          <Button>{locale.header.menu.outTeam}</Button>

          <Button>{locale.header.menu.FAQ}</Button>

          <Button>{locale.header.menu.BackToSite}</Button>
        </MenuButtons>

        <HorizontalLine />
      </Menu>

      <Title>{locale.header.title}</Title>

      <Description>{locale.header.description}</Description>

      <BigSiteLogoText>{locale.header.logo}</BigSiteLogoText>
    </Container>
  );
};
