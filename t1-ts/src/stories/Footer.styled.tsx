import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center; 
  background-color: #444B58;
  width: 980px;
  height: 80px;
  position: relative;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 980px;
  height: 80px;
  margin-top: 15px;
  position: absolute; 
`;

export const LogoName = styled.span`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  margin-left: -30px;
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