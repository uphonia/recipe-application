import React from "react";

import { FormButton } from "./button.styles";

type Props = {
  isCancel?: boolean;
  isConfirm?: boolean;
  isLarge?: boolean;
  onClick: () => void;
  text: string;
};

export const Button = ({
  isCancel,
  isConfirm,
  isLarge,
  onClick,
  text,
}: Props) => {
  return (
    <FormButton
      isCancel={isCancel}
      isConfirm={isConfirm}
      isLarge={isLarge}
      onClick={onClick}
    >
      {text}
    </FormButton>
  );
};
