import { TextField as TextFieldBase, TextFieldProps } from "@mui/material";
import { ChangeEventHandler } from "react";

import { styles } from "./textField.styles";

type Props = {
  autoFocus?: boolean;
  id: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  size?: "small" | "medium";
  slotProps?: TextFieldProps["slotProps"];
  type?: string;
};

export const TextField = ({
  autoFocus,
  id,
  name,
  onChange,
  size = "small",
  slotProps,
  type = "text",
}: Props) => (
  <TextFieldBase
    autoFocus={autoFocus}
    id={id}
    name={name}
    onChange={onChange}
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
