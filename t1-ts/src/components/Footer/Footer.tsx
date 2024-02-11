import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #444B58;
  width: 1440px;
  height: 80px;
  position: relative;
`;

const HeaderMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1440px;
  height: 80px;
  margin-top: 15px;
  position: absolute;
`;

const HeaderSiteLogoNameContainer = styled.span`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  margin-left: -30px;
`;

const HeaderMenuButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  padding-left: 13px;
  list-style-type: none;
  text-align: left;
`;

const Button = styled.div`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.35px;
  cursor: pointer;
  color: #ffffff;
  &:hover {
    color: #e68888;
  }
  margin-left: 16px;
  margin-right: 16px;
`;

function Footer() {
  return (
    <HeaderContainer>
      <HeaderMenuContainer>
        <HeaderSiteLogoNameContainer>Goods4you</HeaderSiteLogoNameContainer>
        <HeaderMenuButtonsContainer>
          <Button>Catalog</Button>
          <Button>About us</Button>
          <Button>Product selection</Button>
          <Button>Out team</Button>
          <Button>Shipping and payment</Button>
          <Button>Contacts</Button>
        </HeaderMenuButtonsContainer>
      </HeaderMenuContainer>
    </HeaderContainer>
  );
}

export default Footer;
