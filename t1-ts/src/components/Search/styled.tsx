import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 240px;
  width: auto;
  background-color: brown;
`;

export const SearchDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  flex: 1 1 auto;
  background-color: #547ca1;
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
