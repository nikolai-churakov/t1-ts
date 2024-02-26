import React from "react";
import {
  Container,
  Questions,
  H2Span,
  HrH2,
  QuestWrapper,
  Question,
  QuestWrapper2,
  HrEnd,
  Answer,
  Hr,
  XWrapper,
} from "./styled";
import x from "../../../images/x.svg";

export const FAQ = () => {
  return (
    <Container id="faq">
      <Questions>
        <H2Span>FAQ</H2Span>

        <HrH2 />

        <QuestWrapper>
          <Question>
            Question 1<Answer>Long answer to the first question</Answer>
            <XWrapper>
              <img src={x} alt="x" />
            </XWrapper>
            <Hr />
          </Question>
        </QuestWrapper>

        <QuestWrapper2>
          <Question>
            Question 2<Answer>Answer 2 2024</Answer>
            <XWrapper>
              <img src={x} alt="x" />
            </XWrapper>
          </Question>
        </QuestWrapper2>

        <HrEnd />
      </Questions>
    </Container>
  );
};
