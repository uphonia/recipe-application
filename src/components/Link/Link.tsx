import React, { ReactNode } from "react";
import { LinkComponent } from "./link.styles";

type Props = {
  children: ReactNode;
  to: string;
};

export const Link = ({ children, to }: Props) => (
  <LinkComponent to={to}>{children}</LinkComponent>
);
