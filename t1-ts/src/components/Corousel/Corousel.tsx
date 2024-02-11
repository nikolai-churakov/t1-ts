import React from "react";
import styled from "styled-components";

const CorouselContainer = styled.div`
  z-index: 140;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9e0e0;
  width: 1440px;
  height: 778px;
  position: relative;
`;

const CorouselContainerColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFF4EE;
  width: 1180px;
  height: 658px;
  position: relative;
`;

function Corousel() {
  return (
    <CorouselContainer>
      <CorouselContainerColor>
       Items
      </CorouselContainerColor>
    </CorouselContainer>
  );
}

export default Corousel;