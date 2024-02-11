import React from "react";
import styled from "styled-components";
import max from "../../imgs/max.jpg";
import tom from "../../imgs/tom.jpg";
import elena from "../../imgs/elena.jpg";
import grek from "../../imgs/grek.jpg";
import lea from "../../imgs/lea.jpg";
import iren from "../../imgs/iren.jpg";

const OurTeamContainer = styled.div`
  z-index: 140;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #484283;
  width: 1440px;
  height: 1190px;
  position: relative;
`;

const HeaderHSpan = styled.div`
  position: absolute;
  left: 130px;
  top: 60px;
  z-index: 130;
  width: 540px;
  font-size: 30px;
  color: #ffffff;
  font-weight: 700;
  text-align: left;
  letter-spacing: 2px;
`;

const RowWrapper = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  margin-right: 20px;
  margin-left: 20px;
`;

const RowWrapperTwo = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin-top: 230px;
`;

const OutteamInfoBlockNone = styled.div`
  z-index: 130; 
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;  
  color: white;
  font-size: 24px;
  font-weight: 700;
  `;

const ImgAboutWraper = styled.div`
  z-index: 120; 
  display: flex;
  justify-content: center;
  align-items: center; 
  color: white;
  position: relative;
  margin-bottom: 20px; 
  &:hover ${OutteamInfoBlockNone} {display: flex};
  cursor: pointer;
`;

const Photo =styled.img`
 z-index: 120; 
  position: relative;
  &:hover {filter: brightness(50%)};
  cursor: pointer;
`;

function OurTeam() {
  return (
    <OurTeamContainer>
      <HeaderHSpan>
        Out team
      </HeaderHSpan>
      <RowWrapper>
        <ImgAboutWraper>
          <OutteamInfoBlockNone>Max<br></br>Administrator</OutteamInfoBlockNone>
          <Photo src={max}
            width={380}
            height={400} 
            alt="Max Admin" />
        </ImgAboutWraper>
        <ImgAboutWraper>
          <OutteamInfoBlockNone>Tom<br></br>Finance</OutteamInfoBlockNone>
          <Photo src={tom}
            width={380}
            height={400} 
            alt="Tom finance" />
        </ImgAboutWraper>
      </RowWrapper>

      <RowWrapperTwo>
        <ImgAboutWraper>
          <OutteamInfoBlockNone>Elena<br></br>Manager</OutteamInfoBlockNone>
            <Photo src={elena}
              width={380}
              height={400} 
              alt="Elena manager" />
        </ImgAboutWraper>
        <ImgAboutWraper>
            <OutteamInfoBlockNone>Grek<br></br>Tailor</OutteamInfoBlockNone>
            <Photo src={grek}
              width={380}
              height={400} 
              alt="Grek tailor" />
        </ImgAboutWraper>
      </RowWrapperTwo>

      <RowWrapper>
        <ImgAboutWraper>
          <OutteamInfoBlockNone>Lea<br></br>Tailor</OutteamInfoBlockNone>
            <Photo src={lea}
              width={380}
              height={400} 
              alt="Lea tailor" />
        </ImgAboutWraper>
        <ImgAboutWraper>
            <OutteamInfoBlockNone>Iren<br></br>Cleaner</OutteamInfoBlockNone>
            <Photo src={iren}
              width={380}
              height={400} 
              alt="Iren cleaner" />
        </ImgAboutWraper>
      </RowWrapper>

    </OurTeamContainer>
  );
}

export default OurTeam;