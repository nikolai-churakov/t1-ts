import React from "react";
import {SmallProduct} from "../../../components/Product";
import {Container, ContainerColor, HSpan, H3Span, Hr, H2Span, ProductContainer} from "./styled";
import productImg from "../../../images/productImg2.jpg";

const PRODUCTS = [
    {
        imgSrc: productImg,
        text: 'Sneakers'
    },
    {
        imgSrc: productImg,
        text: 'Sneakers'
    },
    {
        imgSrc: productImg,
        text: 'Sneakers'
    },
    {
        imgSrc: productImg,
        text: 'Sneakers'
    },
    {
        imgSrc: productImg,
        text: 'Sneakers'
    },
    {
        imgSrc: productImg,
        text: 'Sneakers'
    }
]

export const Carousel = () => {
    return (
        <Container>
            <ContainerColor>
                <HSpan>We will select the perfect product for you</HSpan>

                <H3Span>
                    Answer three questions and we will send you a catalog with the most
                    suitable products for you.
                </H3Span>

                <Hr/>

                <H2Span>What type of product are you considering?</H2Span>

                <ProductContainer>
                    {PRODUCTS.map(({imgSrc, text}) =>
                        <SmallProduct imgSrc={imgSrc} text={text} />
                    )}
                </ProductContainer>
            </ContainerColor>
        </Container>
    );
}
