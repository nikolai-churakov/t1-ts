import React, { FC } from "react";
import "./Styled";

interface InputProps {
  value: string;
  type?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({ value, onChange }) => {
  const htmlFor = `${Math.random()}`;
  return (
    <input 
      id={htmlFor} 
      value={value} 
      onChange={onChange} 
    />
  );
};
