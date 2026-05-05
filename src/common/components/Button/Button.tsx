import { ReactNode } from "react";

import { FormButton } from "./button.styles";
import { BUTTON_SIZE, BUTTON_TYPE } from "./button.type";

type Props = {
  children: ReactNode;
  fluid?: boolean;
  onClick: () => void;
  size?: BUTTON_SIZE;
  buttonType?: BUTTON_TYPE;
};

export const Button = ({
  children,
  fluid = false,
  onClick,
  size = "medium",
  buttonType = "primary",
}: Props) => {
  return (
    <FormButton buttonType={buttonType} fluid={fluid} onClick={onClick} size={size}>
      {children}
    </FormButton>
  );
};
