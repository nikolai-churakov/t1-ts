import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #484283;
  width: 1440px;
  height: 580px;
  position: relative;
`;

export const MenuBasket = styled.div`
  display: flex;
  position: relative;
  top: 11px;
  left: -8px;
  color: #ffffff;
`;

export const ImgAboutWrapper = styled.div`
  display: block;
  z-index: 10;
  position: relative;
  top: -10px;
  left: 260px;
`;

export const Title = styled.div`
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

export const Description = styled.div`
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

export const Brand = styled.div`
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

export const TriangleOne = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 0;
  height: 0;
  border-top: 580px solid #484283;
  border-right: 179px solid transparent;
`;

export const TriangleTwo = styled.div`
  position: absolute;
  top: 0;
  left: 500px;
  z-index: 20;
  width: 0;
  height: 0;
  border-left: 180px solid transparent;
  border-bottom: 580px solid #484283;
`;