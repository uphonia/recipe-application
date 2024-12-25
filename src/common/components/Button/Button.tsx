import React, { ReactNode } from "react";

import { FormButton } from "./button.styles";

type Props = {
  children: ReactNode;
  isCancel?: boolean;
  isConfirm?: boolean;
  isLarge?: boolean;
  onClick: () => void;
};

export const Button = ({
  children,
  isCancel,
  isConfirm,
  isLarge,
  onClick,
}: Props) => {
  return (
    <FormButton
      isCancel={isCancel}
      isConfirm={isConfirm}
      isLarge={isLarge}
      onClick={onClick}
    >
      {children}
    </FormButton>
  );
};
