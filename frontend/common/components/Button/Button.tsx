import { ReactNode } from "react";

import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

import { FormButton } from "./button.styles";
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from "./button.type";

type Props = {
  children: ReactNode;
  className?: string;
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
  className,
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
      className={className}
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
