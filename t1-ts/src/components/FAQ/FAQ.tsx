import React from "react";
import styled from "styled-components";
import x from "../../imgs/x.svg";

const FAQContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 1440px;
  min-height: 439px;
`;

const FAQH2Span = styled.div`
  position: relative;
  left: 1px;
  top: -16px;
  font-family: "JostBold";
  font-size: 30px;
  font-weight: 700;
  color: #444b58;
`;

const HrH2 = styled.div`
  position: relative;
  top: 10px;
  width: 880px;
  height: 1px;
  background-color: #242424;
`;

const FAQQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 880px;
  min-height: 287px;
  /* background-color: #cf745e; */
`;

const Hr = styled.div`
  position: relative;
  top: 16px;
  width: 880px;
  height: 1px;
  background-color: #242424;
`;

const AnswerSpan = styled.div`
  position: relative;
  top: 0px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: #1f5353; */
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

const XWrapper = styled.div`
  position: absolute;
  top: 2px;
  left: 845px;
  transform: rotate(45deg);
  color: black;
`;

const FAQQuestWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 40px;
  /* background-color: #1f5353; */
  cursor: pointer;
  &:hover ${AnswerSpan} {
    visibility: visible;
    opacity: 1;
  }
  &:hover ${XWrapper} {
    transform: rotate(0deg);
    transition-duration: 0.2s;
    transition-delay: 0.15s;
  }
  &:active ${AnswerSpan} {
    visibility: visible;
    opacity: 1;
  }
`;

const FAQQuestWrapper2 = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 85px;
  /* background-color: #1f5353; */
  cursor: pointer;
  &:hover ${AnswerSpan} {
    visibility: visible;
    opacity: 1;
  }
  &:hover ${XWrapper} {
    transform: rotate(0deg);
    transition-duration: 0.2s;
    transition-delay: 0.15s;
  }
  &:active ${AnswerSpan} {
    visibility: visible;
    opacity: 1;
  }
`;

const QuestionSpan = styled.div`
  position: relative;
  top: 1px;
  left: 0px;
  z-index: 120;
  font-family: "Jost";
  font-size: 20px;
  font-weight: 400;
  color: #242424;
`;

const HrEnd = styled.div`
  position: relative;
  top: 106px;
  width: 880px;
  height: 1px;
  background-color: #242424;
`;

function FAQ() {
  return (
    <FAQContainer>
      <FAQQuestionContainer>
        <FAQH2Span>FAQ</FAQH2Span>
        <HrH2 />

        <FAQQuestWrapper>
          <QuestionSpan>
            Question 1<AnswerSpan>Long answer to the first question</AnswerSpan>
            <XWrapper>
              <img src={x} alt="x" />
            </XWrapper>
            <Hr />
          </QuestionSpan>
        </FAQQuestWrapper>

        <FAQQuestWrapper2>
          <QuestionSpan>
            Question 2<AnswerSpan>Answer 2 2024</AnswerSpan>
            <XWrapper>
              <img src={x} alt="x" />
            </XWrapper>
          </QuestionSpan>
        </FAQQuestWrapper2>
        <HrEnd />
      </FAQQuestionContainer>
    </FAQContainer>
  );
}

export default FAQ;
