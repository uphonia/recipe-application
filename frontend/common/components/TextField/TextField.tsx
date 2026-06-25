import { ChangeEventHandler } from "react";
import { TextField as TextFieldBase, TextFieldProps } from "@mui/material";

import { styles } from "./textField.styles";

type Props = {
  autoFocus?: boolean;
  fluid?: boolean;
  id: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  size?: "small" | "medium";
  slotProps?: TextFieldProps["slotProps"];
  type?: string;
};

export const TextField = ({
  autoFocus,
  fluid,
  id,
  name,
  onChange,
  placeholder,
  size = "small",
  slotProps,
  type = "text",
}: Props) => (
  <TextFieldBase
    autoFocus={autoFocus}
    id={id}
    fullWidth={fluid}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    size={size}
    slotProps={{
      input: { notched: false },
      ...slotProps,
    }}
    sx={styles}
    type={type}
    variant="outlined"
  />
);
