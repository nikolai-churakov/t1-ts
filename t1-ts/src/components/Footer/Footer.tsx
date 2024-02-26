import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changePage, PAGES } from '../../redux/shopSlice'
import {Container, MenuContainer, LogoName, MenuButtons, Button} from "./styled";

export const Footer = () => {

  const dispatch = useDispatch()

  return (
    <Container>
      <MenuContainer>
        <LogoName onClick={() => dispatch(changePage(PAGES.CATALOG))}>
          Goods4you
          </LogoName>

        <MenuButtons>
          <Button 
          onClick={() =>
            document
              .getElementById("cataloge")
              ?.scrollIntoView({ behavior: "smooth" })}
          >Catalog</Button>

          <Button
          onClick={() =>
            document
              .getElementById("aboutUs")
              ?.scrollIntoView({ behavior: "smooth" })}
          >About us</Button>

          <Button
            onClick={() =>
              document
                .getElementById("Carousel")
                ?.scrollIntoView({ behavior: "smooth" })}
          >Product selection</Button>

          <Button
           onClick={() =>
            document
              .getElementById("outTeam")
              ?.scrollIntoView({ behavior: "smooth" })}
          >Out team</Button>

          <Button
          onClick={() =>
            document
              .getElementById("faq")
              ?.scrollIntoView({ behavior: "smooth" })}
          >FAQ</Button>
        </MenuButtons>
      </MenuContainer>
    </Container>
  );
}
