import styled from 'styled-components';

export const Container = styled.div`
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

export const CatalogParameters = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  background-color: #fff4ee;
  height: 535px;
  color: #444b58;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 1px;
  position: relative;
  top: -312px;
  left: 0;
`;

export const SelectionText = styled.p`
  margin-left: 20px;
`;

export const CategoryText = styled.span`
  color: #444b58;
  font-weight: 600;
  font-size: 16px;
  margin-left: 20px;
`;

export const CategoryItems = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-left: 20px;
  width: 240px;
  padding: 0;
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

export const ResetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 237px;
  height: 65px;
  border-radius: 4px;
  left: 23px;
  top: 468px;
  color: #444b58;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  text-align: center;

  &:hover {
    color: #000000;
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
