import React, { ReactNode } from "react";

import { FormButton } from "./button.styles";
import { BUTTON_SIZE, BUTTON_TYPE } from "./button.type";

type Props = {
  buttonType?: BUTTON_TYPE;
  children: ReactNode;
  fluid?: boolean;
  onClick: () => void;
  size?: BUTTON_SIZE;
};

export const Button = ({
  buttonType = "primary",
  children,
  fluid = false,
  onClick,
  size = "medium",
}: Props) => {
  return (
    <FormButton
      buttonType={buttonType}
      fluid={fluid}
      onClick={onClick}
      size={size}
    >
      {children}
    </FormButton>
  );
};
