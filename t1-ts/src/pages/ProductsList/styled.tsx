import styled from 'styled-components';

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1440px;
  height: 1378px;
  position: relative;
`;

export const Catalog = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  min-height: 611px;
  margin-right: 20px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 1px;
  position: relative;
  left: -2px;
  top: -344px;
`;

export const SelectionText = styled.p`
  margin-left: 20px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 57px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: solid #c27850 1px;
  font-size: 16px;
  font-weight: 600;
`;

export const ApplyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 237px;
  height: 65px;
  position: absolute;
  left: 22px;
  top: 391px;
  background-color: #444b58;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  text-align: center;

  &:hover {
    color: #f14f4f;
  }

`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 880px;
  min-height: 1194px;
  margin-top: 130px;
`;

export const ShowMoreButton = styled.div`
  display: flex;
  position: relative;
  left: 40%;
  width: 167px;
  height: 71px;
  background-color: #f14f4f;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #000000;
  }
`;
