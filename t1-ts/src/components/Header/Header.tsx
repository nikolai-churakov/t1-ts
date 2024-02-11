import React from "react";
import styled from "styled-components";
import icon from "../../imgs/Vector.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #484283;
  width: 1440px;
  height: 528px;
  position: relative;
`;

const HeaderMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  /* background-color: #e68888; */
  width: 1440px;
  height: 49px;
  margin-top: 15px;
  position: absolute;
`;

const HeaderSiteLogoNameContainer = styled.span`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  line-height: 43px;
  margin-left: 26px;
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
    color: #000000;
  }
  margin-left: 16px;
  margin-right: 16px;
`;

const HeaderMenuBasketContainer = styled.div`
  display: flex;
  position: relative;
  top: 11px;
  left: -8px;
  color: #ffffff;
`;

const Hr = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 1180px;
  height: 1px;
  background-color: #e8e8e8;
  top: 49px;
  justify-content: center;
  margin: 0 0 15 15;
`;

const HeaderBigSiteLogoText = styled.div`
  position: absolute;
  font-family: "Jost";
  top: 200px;
  font-size: 200px;
  letter-spacing: 13px;
  opacity: 0.12;
  color: #ffffff;
  font-weight: 700;
  line-height: 294px;
  text-align: center;
`;

const HeaderHSpan = styled.div`
  position: absolute;
  left: 130px;
  top: 170px;
  width: 540px;
  font-size: 36px;
  color: #ffffff;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0.5px;
  text-align: left;
`;

const HeaderSpan = styled.div`
  position: absolute;
  left: 130px;
  top: 285px;
  width: 340px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-align: left;
`;

const HeaderMenuGoShipping = styled.div`
  display: flex;
  position: relative;
  width: 200px;
  height: 67px;
  background-color: #f14f4f;
  border-radius: 4px;
  left: 145px;
  top: 370px;
  color: #ffffff;
  &:hover {
    color: #000000;
  }
  cursor: pointer;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

function Header() {
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

        <HeaderMenuBasketContainer>
          <span>Card</span>
          <div>
            <img src={icon} alt="basket" />
          </div>
        </HeaderMenuBasketContainer>
        <Hr />
      </HeaderMenuContainer>
      <HeaderHSpan>
        Any products from famous brands with worldwide delivery
      </HeaderHSpan>
      <HeaderSpan>
        We sell smartphones, laptops, clothes, shoes and many other products at
        low prices
      </HeaderSpan>
      <HeaderBigSiteLogoText>Goods4you</HeaderBigSiteLogoText>
      <HeaderMenuGoShipping>Go to shopping</HeaderMenuGoShipping>
    </HeaderContainer>
  );
}

export default Header;
