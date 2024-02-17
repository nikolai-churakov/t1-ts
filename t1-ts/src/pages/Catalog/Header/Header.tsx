import React from "react";
import locale from '../../../locale/locale';
import icon from "../../../images/Vector.svg";
import {ActiveButton} from "../../../components/ActiveButton";
import { useSelector, useDispatch } from 'react-redux';
import { changePage, PAGES } from '../../../redux/shopSlice';

import {
    Container,
    Menu,
    LogoName,
    MenuButtons,
    Button,
    MenuBasket,
    HorizontalLine,
    BaskerImagesWrapper,
    BigSiteLogoText,
    Title,
    Description
} from './styled';

export const Header = () => {

    const dispatch = useDispatch()



    return (
        <Container>
            <Menu>
                <LogoName>{locale.header.logo}</LogoName>

                <MenuButtons>
                    <Button onClick={() => dispatch(changePage(PAGES.CATALOG))}>{locale.header.menu.catalog}</Button>

                    <Button onClick={() => dispatch(changePage(PAGES.PRODUCTS_LIST))}>{locale.header.menu.aboutUs}</Button>

                    <Button>{locale.header.menu.productSelection}</Button>

                    <Button>{locale.header.menu.outTeam}</Button>

                    <Button>{locale.header.menu.shipping}</Button>
                    
                    <Button>{locale.header.menu.contacts}</Button>
                </MenuButtons>

                <MenuBasket>
                    <span>{locale.header.menu.card}</span>

                    <BaskerImagesWrapper>
                        <img src={icon} alt="basket"/>
                    </BaskerImagesWrapper>
                </MenuBasket>

                <HorizontalLine/>
            </Menu>

            <Title>{locale.header.title}</Title>

            <Description>{locale.header.description}</Description>

            <BigSiteLogoText>{locale.header.logo}</BigSiteLogoText>

            <ActiveButton text={locale.header.shopping}/>
        </Container>
    );
}
