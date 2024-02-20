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
    Description,
    ButtonWrapper,
} from './styled';

export const Header = () => {

    const dispatch = useDispatch()



    return (
        <Container>
            <Menu>
                <LogoName onClick={() => dispatch(changePage(PAGES.CATALOG))}>{locale.header.logo}</LogoName>

                <MenuButtons>
                    <Button onClick={() => dispatch(changePage(PAGES.CATALOG))}>{locale.header.menu.catalog}</Button>

                    <Button>{locale.header.menu.aboutUs}</Button>

                    <Button>{locale.header.menu.productSelection}</Button>

                    <Button>{locale.header.menu.outTeam}</Button>

                    <Button>{locale.header.menu.FAQ}</Button>
                    
                    <Button onClick={() => dispatch(changePage(PAGES.PRODUCTS_LIST))}>{locale.header.menu.forStaff}</Button>
                </MenuButtons>
                {/*  Корзина с товарами отключена */}
                {/* <MenuBasket>
                    <span>{locale.header.menu.card}</span>

                    <BaskerImagesWrapper>
                        <img src={icon} alt="basket"/>
                    </BaskerImagesWrapper>
                </MenuBasket> */}

                <HorizontalLine/>
            </Menu>

            <Title>{locale.header.title}</Title>

            <Description>{locale.header.description}</Description>

            <BigSiteLogoText>{locale.header.logo}</BigSiteLogoText>
            <ButtonWrapper>
                <ActiveButton text={locale.header.shopping}/>
            </ButtonWrapper>
        </Container>
    );
}
