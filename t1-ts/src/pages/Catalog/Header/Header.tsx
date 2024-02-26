import React from "react";
import locale from "../../../locale/locale";
import icon from "../../../images/Vector.svg";
import { ActiveButton } from "../../../components/ActiveButton";
import { useSelector, useDispatch } from "react-redux";
import { changePage, PAGES } from "../../../redux/shopSlice";

import {
  Container,
  Menu,
  LogoName,
  MenuButtons,
  Button,
  MenuBasket,
  HorizontalLine,
  BaskerImagesWrapper,
  BigSiteLogoText,
  Title,
  Description,
  ButtonWrapper,
} from "./styled";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Menu>
        <LogoName onClick={() => dispatch(changePage(PAGES.CATALOG))}>
          {locale.header.logo}
        </LogoName>

        <MenuButtons>
          <Button onClick={() =>  document
                .getElementById("catalog")
                ?.scrollIntoView({ behavior: "smooth" })}>
            {locale.header.menu.catalog}
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("aboutUs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {locale.header.menu.aboutUs}
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("Carousel")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {locale.header.menu.productSelection}
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("outTeam")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {locale.header.menu.outTeam}
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("faq")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {locale.header.menu.FAQ}
          </Button>

          <Button onClick={() => dispatch(changePage(PAGES.PRODUCTS_LIST))}>
            {locale.header.menu.forStaff}
          </Button>
        </MenuButtons>
        {/*  Корзина с товарами отключена */}
        {/* <MenuBasket>
                    <span>{locale.header.menu.card}</span>

                    <BaskerImagesWrapper>
                        <img src={icon} alt="basket"/>
                    </BaskerImagesWrapper>
                </MenuBasket> */}

        <HorizontalLine />
      </Menu>

      <Title>{locale.header.title}</Title>

      <Description>{locale.header.description}</Description>

      <BigSiteLogoText>{locale.header.logo}</BigSiteLogoText>
      <ButtonWrapper>
        <ActiveButton text={locale.header.shopping} />
      </ButtonWrapper>
    </Container>
  );
};
