import React from "react";
import styled from "styled-components";
import niger from "../../imgs/pexels-budgeron-bach-5158825.jpg";

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #484283;
  width: 1440px;
  height: 580px;
  position: relative;
`;

const HeaderMenuBasketContainer = styled.div`
  display: flex;
  position: relative;
  top: 11px;
  left: -8px;
  color: #ffffff;
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

const TriangleOne = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 20;
  width: 0;
  height: 0;
  border-top: 580px solid #484283;
  border-right: 179px solid transparent;
`;

const TriangleTwo = styled.div`
  position: absolute;
    top: 0px;
    left: 500px;
    z-index: 20;
    width: 0;
    height: 0;
    border-left: 180px solid transparent;
    border-bottom: 580px solid #484283;
`;


function About() {
  return (
    <AboutContainer>
        <HeaderMenuBasketContainer>
          <ImgAboutWraper>
          <TriangleOne/>
            <img src={niger}
            width={680}
            height={580} 
            alt="niger" />
            <TriangleTwo/>
          </ImgAboutWraper>
        </HeaderMenuBasketContainer>
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
    </AboutContainer>
  );
}

export default About;