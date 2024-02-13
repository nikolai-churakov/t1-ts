import React from "react";
import {SmallContainer, Input, CartText} from './styled';

interface ProductProps {
    imgSrc: string;
    text: string;
}

export const SmallProduct = ({imgSrc, text}: ProductProps) => {
    return (
        <SmallContainer>
            <img src={imgSrc} width={280} height={120} alt="productPicture"/>

            <Input defaultChecked/>

            <CartText>{text}</CartText>
        </SmallContainer>
    );
}
