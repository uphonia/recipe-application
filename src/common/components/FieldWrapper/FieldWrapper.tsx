import React, { ReactNode } from "react";
import { Wrapper } from "./fieldWrapper.styles";

type Props = {
  children: ReactNode;
};

export const FieldWrapper = ({ children }: Props) => (
  <Wrapper>{children}</Wrapper>
);
