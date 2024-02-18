import styled from "styled-components";

export const Container = styled.div`
  z-index: 140;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1440px;
  height: 778px;
  /* position: relative; */
`;

export const ContainerColor = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  background-color: #fff4ee;
  width: 1180px;
  height: 658px;
  /* position: relative; */
`;

export const HSpan = styled.div`
  display: block;
  margin: 45px 0px 0px 100px;
  /* font-family: "JostBold"; */
  font-size: 30px;
  font-weight: 700;
  color: #444b58;
`;

export const H3Span = styled.div`
  margin: 12px 0px 0px 100px;
  /* position: relative;
  left: 100px;
  top: 12px; */
  font-size: 16px;
  font-weight: 600;
  opacity: 0.5;
  color: #444b58;
`;

export const Hr = styled.div`
  margin-top: 4px;
  margin-inline: auto;
  /* position: relative; */
  /* top: 16px; */
  width: 980px;
  height: 1px;
  background-color: #242424;
`;

export const H2Span = styled.div`
  margin: 25px 0px 0px 100px;
  /* position: relative;
  left: 100px;
  top: 39px; */
  /* font-family: "JostSemiBold"; */
  font-size: 24px;
  font-weight: 600;
  color: #444b58;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1180px;
  height: 284px;
  margin-top: 40px;
  margin-bottom: 50px;
  padding: 0px 0px 0px 80px;
`;

export const NumberofPAgeNextStepWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
`;

export const NextStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 50px;

  /* position: absolute;
  left: 22px;
  top: 391px; */
  color: #444b58;
  border: 2px solid #444b58;
  border-radius: 4px;
  margin-right: 100px;
  &:hover {
    color: #f14f4f;
  }
`;
