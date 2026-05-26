import { ReactNode } from "react";

import { FormButton } from "./button.styles";
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from "./button.type";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  fluid?: boolean;
  loading?: boolean;
  onClick?: () => void;
  size?: BUTTON_SIZE;
  type?: BUTTON_TYPE;
  variant?: BUTTON_VARIANT;
};

export const Button = ({
  children,
  disabled = false,
  loading = false,
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
      {loading ? <LoadingSpinner size="20px" /> : children}
    </FormButton>
  );
};
