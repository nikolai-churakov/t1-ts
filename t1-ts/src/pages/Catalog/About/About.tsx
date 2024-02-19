import React from "react";

import niger from "../../../images/pexels-budgeron-bach-5158825.jpg";
import {
  Container,
  Title,
  Description,
  Brand,
  MenuBasket,
  ImgAboutWrapper,
  TriangleOne,
  TriangleTwo,
} from "./styled";
import locale from "../../../locale/locale";

export const About = () => {
  return (
    <Container>
      <MenuBasket>
        <ImgAboutWrapper>
          <TriangleOne />

          <img src={niger} width={680} height={580} alt="niger" />

          <TriangleTwo />
        </ImgAboutWrapper>
      </MenuBasket>

      <Title>{locale.about.aboutUs}</Title>

      <Description>
        Every day a person has a choice what to spend his <br />
        money on. Stores and websites offer an endless list
        <br />
        of products.
        <br />
        But we will help you make the right choice!
      </Description>

      <Brand>Goods4you</Brand>
    </Container>
  );
};
