import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 240px;
  width: 1440px;
  position: relative;
`;

export const H1div = styled.div`
  display: flex;
  align-items: end;
  position: relative;
  height: 80px;
  font-size: 30px;
  font-weight: 700;
  color: #444b58;
  margin-left: 60px;
`;

export const SearchDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  flex: 1 1 auto;
`;

export const Button = styled.div`
  display: flex;
  position: relative;
  width: 200px;
  height: 67px;
  background-color: #f14f4f;
  border-radius: 4px;
  left: -475px;
  top: 369px;
  color: #ffffff;
  cursor: pointer;
  text-align: center;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #000000;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const InputWrapper = styled.div`
  position: relative;
  height: 67px;
`;

export const Input = styled.input`
  display: flex;
  box-sizing: border-box;
  width: 1020px;
  height: 67px;
  border-radius: 4px;
  border: 1px solid #46464684;
  color: #b2b5bb;
  background-color: #F6F6F6;
  font-size: 24px;
  padding-left: 10px;
  font-weight: 600px;
  align-items: center;
  justify-content: center;
`;
