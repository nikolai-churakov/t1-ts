import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 1440px;
  min-height: 439px;
`;

export const H2Span = styled.div`
  position: relative;
  left: 1px;
  top: -16px;
  font-family: "JostBold";
  font-size: 30px;
  font-weight: 700;
  color: #444b58;
`;

export const HrH2 = styled.div`
  position: relative;
  top: 10px;
  width: 880px;
  height: 1px;
  background-color: #242424;
`;

export const Questions = styled.div`
  display: flex;
  flex-direction: column;
  width: 880px;
  min-height: 287px;
`;

export const Hr = styled.div`
  position: relative;
  top: 16px;
  width: 880px;
  height: 1px;
  background-color: #242424;
`;

export const Answer = styled.div`
  position: relative;
  top: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 121;
  font-family: "JostSemiBold";
  font-size: 16px;
  font-weight: 600;
  color: #2424247f;
  transition: all 0.3s;
  visibility: hidden;
  opacity: 0;
  transition-property: opacity, visibility;
  transition-duration: 0.2s;
  transition-delay: 0.15s;
`;

export const XWrapper = styled.div`
  position: absolute;
  top: 2px;
  left: 845px;
  transform: rotate(45deg);
  color: black;
`;

export const QuestWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 40px;
  cursor: pointer;

  &:hover ${Answer} {
    visibility: visible;
    opacity: 1;
  }

  &:hover ${XWrapper} {
    transform: rotate(0deg);
    transition-duration: 0.2s;
    transition-delay: 0.15s;
  }

  &:active ${Answer} {
    visibility: visible;
    opacity: 1;
  }
`;

export const QuestWrapper2 = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 85px;
  cursor: pointer;

  &:hover ${Answer} {
    visibility: visible;
    opacity: 1;
  }

  &:hover ${XWrapper} {
    transform: rotate(0deg);
    transition-duration: 0.2s;
    transition-delay: 0.15s;
  }

  &:active ${Answer} {
    visibility: visible;
    opacity: 1;
  }
`;

export const Question = styled.div`
  font-family: "JostRegular";
  position: relative;
  top: 1px;
  left: 0;
  z-index: 120;
  font-size: 20px;
  font-weight: 400;
  color: #242424;
`;

export const HrEnd = styled.div`
  position: relative;
  top: 106px;
  width: 880px;
  height: 1px;
  background-color: #242424;
`;
