import React, { ReactNode } from "react";
import { StyledButton } from "./styles";

export enum ButtonStyles {
  Primary = "primary",
  Secondary = "secondary",
}

interface IProps {
  title: string | ReactNode;
  type: "button" | "submit" | "reset";
  typeStyle: ButtonStyles;
  onClick?: () => void;
  disabled?: boolean;
  id?: string;
}

export const Button = ({
  title,
  type,
  onClick,
  disabled,
  typeStyle,
  id,
}: IProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      $typeStyle={typeStyle}
      id={id}
    >
      {title}
    </StyledButton>
  );
};
