import React from "react";
import styled from "styled-components";
import niger from "../../imgs/pexels-budgeron-bach-5158825.jpg";

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #484283;
  width: 1440px;
  height: 528px;
  position: relative;
`;

const HeaderMenuBasketContainer = styled.div`
  display: flex;
  position: relative;
  top: 11px;
  left: -8px;
  color: #ffffff;
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

function About() {
  return (
    <AboutContainer>
        <HeaderMenuBasketContainer>
          <div>
            <img src={niger} alt="niger" />
          </div>
        </HeaderMenuBasketContainer>
      <HeaderHSpan>
        Any products from famous brands with worldwide delivery
      </HeaderHSpan>
      <HeaderSpan>
      Every day a person has a choice what to spend his <br></br>
      money on. Stores and websites offer an endless list<br></br> 
      of products.<br></br> 
      But we will help you make the right choice!
      </HeaderSpan>
    </AboutContainer>
  );
}

export default About;