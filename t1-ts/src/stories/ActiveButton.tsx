import React from "react";

import {Button} from './ActiveButton.styled';

interface ActiveButtonProps {
    text: string;
}

export const ActiveButton = ({text}: ActiveButtonProps) => {
    return (
        <Button>{text}</Button>
    );
}
