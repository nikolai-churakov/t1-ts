import React from "react";
import locale from "../../../locale/locale";
import { ActiveButton } from "../../../components/ActiveButton";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  ButtonWrapper,
} from "./styled";

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default (props: any) => <StyledLink {...props} />;

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Menu>
        
        <StyledLink to="/" relative="path" >
        
          <LogoName>{locale.header.logo}</LogoName>
          
        </StyledLink>
        

        <MenuButtons>
          <Button
            onClick={() =>
              document
                .getElementById("catalog")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
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

          <Link to="/ProductsList" relative="path" style={{ textDecoration: 'none' }}>
            <Button>{locale.header.menu.forStaff}</Button>
          </Link>
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
