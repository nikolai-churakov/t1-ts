import styled from 'styled-components';

export const Container = styled.div`
  z-index: 140;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1440px;
  height: 778px;
  position: relative;
`;

export const ContainerColor = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  background-color: #fff4ee;
  width: 1180px;
  height: 658px;
  position: relative;
`;

export const HSpan = styled.div`
  position: relative;
  left: 101px;
  top: 40px;
  font-family: "JostBold";
  font-size: 30px;
  font-weight: 700;
  color: #444b58;
`;

export const H3Span = styled.div`
  position: relative;
  left: 101px;
  top: 45px;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.5;
  color: #444b58;
`;

export const Hr = styled.div`
  position: relative;
  top: 16px;
  width: 880px;
  height: 1px;
  background-color: #242424;
`;

export const H2Span = styled.div`
  position: relative;
  left: 101px;
  top: 68px;
  font-family: "JostSemiBold";
  font-size: 24px;
  font-weight: 600;
  color: #444b58;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1180px;
  min-height: 350px;
  margin-top: 130px;
`;