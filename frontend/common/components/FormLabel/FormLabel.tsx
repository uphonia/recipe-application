import { ReactNode } from "react";

import { Label } from "./formLabel.styles";

type Props = {
  children?: ReactNode;
  label: string;
  name: string;
};

export const FormLabel = ({ children, label, name }: Props) => (
  <Label htmlFor={name}>
    {label}
    {children}
  </Label>
);
