import React, { ReactNode } from "react";

import { Wrapper, Checkbox } from "./formCheckbox.styles";

type Props = {
  children: ReactNode;
};

export const FormCheckbox = ({ children }: Props) => {
  return (
    <Wrapper>
      <Checkbox type="checkbox" />
      {children}
    </Wrapper>
  );
};
