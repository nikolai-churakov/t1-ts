import React from "react";
import { Button } from "./styled";

interface ActiveButtonProps {
  text: string;
  onClick?: () => void;
}

export const ActiveButton = ({ text, onClick }: ActiveButtonProps) => {
  
  return <Button onClick={onClick}>{text}</Button>;
};
