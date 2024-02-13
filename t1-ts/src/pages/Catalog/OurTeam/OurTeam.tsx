import React from "react";
import max from "../../../images/max.jpg";
import tom from "../../../images/tom.jpg";
import elena from "../../../images/elena.jpg";
import grek from "../../../images/grek.jpg";
import lea from "../../../images/lea.jpg";
import iren from "../../../images/iren.jpg";

import {Container, Title, RowWrapper, RowWrapperTwo, ImgAboutWraper, OutteamInfoBlockNone, PhotoDiv, Photo} from './styled';

export const OurTeam = () => {
    return (
        <Container>
            <Title>Our team</Title>

            <RowWrapper>
                <ImgAboutWraper>
                    <OutteamInfoBlockNone>
                        Max<br/>Administrator
                    </OutteamInfoBlockNone>

                    <PhotoDiv>
                        <Photo src={max} width={380} height={400} alt="Max Admin"/>
                    </PhotoDiv>
                </ImgAboutWraper>
                <ImgAboutWraper>
                    <OutteamInfoBlockNone>
                        Tom<br/>Finance
                    </OutteamInfoBlockNone>

                    <Photo src={tom} width={380} height={400} alt="Tom finance"/>
                </ImgAboutWraper>
            </RowWrapper>

            <RowWrapperTwo>
                <ImgAboutWraper>
                    <OutteamInfoBlockNone>
                        Elena<br/>Manager
                    </OutteamInfoBlockNone>

                    <PhotoDiv>
                        <Photo src={elena} width={380} height={400} alt="Elena manager"/>
                    </PhotoDiv>
                </ImgAboutWraper>
                <ImgAboutWraper>
                    <OutteamInfoBlockNone>
                        Grek<br/>Tailor
                    </OutteamInfoBlockNone>

                    <PhotoDiv>
                        <Photo src={grek} width={380} height={400} alt="Grek tailor"/>
                    </PhotoDiv>
                </ImgAboutWraper>
            </RowWrapperTwo>

            <RowWrapper>
                <ImgAboutWraper>
                    <OutteamInfoBlockNone>
                        Lea<br/>Tailor
                    </OutteamInfoBlockNone>

                    <PhotoDiv>
                        <Photo src={lea} width={380} height={400} alt="Lea tailor"/>
                    </PhotoDiv>
                </ImgAboutWraper>
                <ImgAboutWraper>
                    <OutteamInfoBlockNone>
                        Iren<br/>Cleaner
                    </OutteamInfoBlockNone>

                    <PhotoDiv>
                        <Photo src={iren} width={380} height={400} alt="Iren cleaner"/>
                    </PhotoDiv>
                </ImgAboutWraper>
            </RowWrapper>
        </Container>
    );
}
