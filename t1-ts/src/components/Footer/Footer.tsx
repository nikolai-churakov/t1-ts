import React from "react";
import {Container, MenuContainer, LogoName, MenuButtons, Button} from "./styled";

export const Footer = () => {
  return (
    <Container>
      <MenuContainer>
        <LogoName>Goods4you</LogoName>

        <MenuButtons>
          <Button>Catalog</Button>

          <Button>About us</Button>

          <Button>Product selection</Button>

          <Button>Out team</Button>

          <Button>Shipping and payment</Button>

          <Button>Contacts</Button>
        </MenuButtons>
      </MenuContainer>
    </Container>
  );
}
