import React, { ReactNode } from "react";

import { FormButton } from "./button.styles";
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from "./button.type";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  fluid?: boolean;
  onClick?: () => void;
  size?: BUTTON_SIZE;
  type?: BUTTON_TYPE;
  variant?: BUTTON_VARIANT;
};

export const Button = ({
  children,
  disabled = false,
  fluid = false,
  onClick,
  size = "medium",
  type = "button",
  variant = "primary",
}: Props) => {
  return (
    <FormButton
      disabled={disabled}
      fluid={fluid}
      onClick={onClick}
      size={size}
      type={type}
      variant={variant}
    >
      {children}
    </FormButton>
  );
};
