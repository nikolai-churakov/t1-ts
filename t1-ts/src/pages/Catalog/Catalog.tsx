import React from "react";

import {Header} from "./Header";
import {Body} from'./Body';
import {About} from "./About";
import {Carousel} from "./Carousel";
import {OurTeam} from "./OurTeam";
import {FAQ} from "./FAQ";
import {Footer} from "../../components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import {Container} from './styled';

export const Catalog = () => {
    return (
            <Container>
                <Header/>

                <Body/>

                <About/>

                <Carousel/>

                <OurTeam/>

                <FAQ/>

                <Footer/>
            </Container>
    );
}
