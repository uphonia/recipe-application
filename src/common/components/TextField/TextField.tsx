import { TextField as TextFieldBase } from "@mui/material";
import { ChangeEventHandler } from "react";

import { styles } from "./textField.styles";

type Props = {
  autoFocus?: boolean;
  id: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  size?: "small" | "medium";
  slotInputProps?: { input: Record<string, any> };
  type: string;
};

export const TextField = ({
  autoFocus,
  id,
  name,
  onChange,
  size = "small",
  slotInputProps,
  type,
}: Props) => (
  <TextFieldBase
    autoFocus={autoFocus}
    id={id}
    name={name}
    onChange={onChange}
    size={size}
    slotProps={slotInputProps}
    sx={styles}
    type={type}
    variant="outlined"
  />
);
