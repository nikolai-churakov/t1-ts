import React from "react";
import {Container, Text, Price, Input, CartText} from './styled';

interface ProductProps {
    imgSrc: string;
    name: string;
    coast: string;
    isSmall?: boolean;
}

export const Product = ({imgSrc, name, coast, isSmall = false}: ProductProps) => {
    return (
        <Container>
            <img src={imgSrc} width={280} height={isSmall ? 120 : 293} alt="productPicture"/>

            {isSmall ? (
                <>
                    <Input defaultChecked/>

                    <CartText>Sneakers</CartText>
                </>
            ) : (
                <>
                    <Text>{name}</Text>
                    <Price>{coast}</Price>
                </>
            )}
        </Container>
    );
}
