import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 273px;
  height: 358px;
  border-radius: 4px;
  margin-right: 20px;
`;

export const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 280px;
  height: 154px;
  border-radius: 4px;
  margin-right: 20px;
`;

export const Text = styled.div`
  font-size: 16px;
  color: #000000;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 3px;

  &:hover {
    color: #f14f4f;
  }
`;

export const CartText = styled.div`
  position: relative;
  top: -24px;
  left: 35px;
  font-size: 16px;
  color: #444b58;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 3px;
  cursor: pointer;

  &:hover {
    color: #f14f4f;
  }
`;

export const Price = styled.div`
  font-size: 20px;
  color: #000000;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-align: left;
  cursor: pointer;
  justify-content: center;
`;

export const Input = styled.input.attrs({type: "checkbox"})`
  position: relative;
  width: 24px;
  height: 24px;
  top: 5px;
  left: 0;
`;
