import styled from 'styled-components';

export const Container = styled.div`
  z-index: 140;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #484283;
  width: 1440px;
  height: 1190px;
  position: relative;
`;

export const Title = styled.div`
  position: absolute;
  left: 131px;
  top: 60px;
  z-index: 130;
  width: 540px;
  font-size: 30px;
  font-family: "JostBold";
  color: #ffffff;
  font-weight: 700;
  text-align: left;
`;

export const RowWrapper = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  margin-right: 20px;
  margin-left: 20px;
`;

export const RowWrapperTwo = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin-top: 230px;
`;

export const OutteamInfoBlockNone = styled.div`
  z-index: 130;
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-family: "JostSemiBold";
  font-size: 24px;
  font-weight: 600;
`;

export const PhotoDiv = styled.div``;

export const ImgAboutWraper = styled.div`
  z-index: 120;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
  position: relative;
  margin-bottom: 15px;

  &:hover ${OutteamInfoBlockNone} {
    display: flex;
  }

  &:hover ${PhotoDiv} {
    filter: brightness(51%);
  }

  cursor: pointer;
`;

export const Photo = styled.img`
  z-index: 120;
  position: relative;
  cursor: pointer;
`;