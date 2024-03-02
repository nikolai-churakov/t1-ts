import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  MenuContainer,
  LogoName,
  MenuButtons,
  Button,
} from "./styled";
import { Link } from "react-router-dom";
import locale from "../../locale/locale";

export const Footer = () => {
  

  return (
    <Container>
      <MenuContainer>
        <Link to="/" relative="path" style={{ textDecoration: 'none' }}>
          <LogoName>{locale.header.logo}</LogoName>
        </Link>

        <MenuButtons>
          <Button
            onClick={() =>
              document
                .getElementById("cataloge")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Catalog
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("aboutUs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About us
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("Carousel")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Product selection
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("outTeam")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Out team
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("faq")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            FAQ
          </Button>
        </MenuButtons>
      </MenuContainer>
    </Container>
  );
};
