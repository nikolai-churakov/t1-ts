import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #484283;
  width: 1440px;
  height: 528px;
  position: relative;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1440px;
  height: 49px;
  margin-top: 15px;
  position: absolute;
`;

export const LogoName = styled.div`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  line-height: 43px;
  margin-left: 26px;
  cursor: pointer;
  
  &:hover {
    color: #e68888;
  }

`;

export const MenuButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  padding-left: 13px;
  list-style-type: none;
  text-align: left;
`;

export const Button = styled.div`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.35px;
  cursor: pointer;
  color: #ffffff;
  margin-left: 16px;
  margin-right: 16px;

  &:hover {
    color: #e68888;
  }
`;

export const MenuBasket = styled.div`
  display: flex;
  position: relative;
  top: 15px;
  left: -70px;
  color: #ffffff;
`;
 
export const BaskerImagesWrapper = styled.div`
  margin-left: 20px;
`;

export const HorizontalLine = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 1180px;
  height: 1px;
  background-color: #e8e8e8;
  top: 49px;
  justify-content: center;
  margin: 0 0 15px 15px;
`;

export const BigSiteLogoText = styled.div`
  position: absolute;
  top: 200px;
  font-size: 200px;
  letter-spacing: 13px;
  opacity: 0.12;
  color: #ffffff;
  font-weight: 700;
  line-height: 294px;
  text-align: center;
`;

export const Title = styled.div`
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

export const Description = styled.div`
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

export const ButtonWrapper = styled.div`
position: relative; 
left: -475px;
top: 369px;
`;