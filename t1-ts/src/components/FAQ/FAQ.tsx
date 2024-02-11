import React from "react";
import styled from "styled-components";
import niger from "../../imgs/pexels-budgeron-bach-5158825.jpg";

const FAQContainer = styled.div`
  z-index: 140;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  width: 1440px;
  height: 439px;
  position: relative;
`;

const HeaderMenuBasketContainer = styled.div`
  display: flex;
  position: relative;
  top: 11px;
  left: -8px;
  color: #7a7878;
`;

const ImgAboutWraper = styled.div`
  display: block;
  z-index: 10;
  position: relative;
  top: -10px;
  left: 260px;
`;

const HeaderHSpan = styled.div`
  position: absolute;
  left: 137px;
  top: 223px;
  z-index: 120;
  width: 540px;
  font-size: 30px;
  color: #ffffff;
  font-weight: 700;
  text-align: left;
`;

const HeaderSpan = styled.div`
  position: absolute;
  left: 130px;
  top: 285px;
  z-index: 121;
  width: 340px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: left;
`;

const AboutBrandDiv = styled.div`
  position: absolute;
  left: 483px;
  top: 402px;
  z-index: 121;
  width: 340px;
  font-size: 20px;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 0.9px;
  text-align: left;
`;
function FAQ() {
  return (
    <FAQContainer>
      <HeaderHSpan>
        About us
      </HeaderHSpan>
      <HeaderSpan>
      Every day a person has a choice what to spend his <br></br>
      money on. Stores and websites offer an endless list<br></br> 
      of products.<br></br> 
      But we will help you make the right choice!
      </HeaderSpan>
      <AboutBrandDiv>Goods4you</AboutBrandDiv>
    </FAQContainer>
  );
}

export default FAQ;