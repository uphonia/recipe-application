import { ChangeEventHandler, MouseEvent, useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { TextField } from "../TextField/TextField";

type Props = {
  fluid?: boolean;
  id: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

export const PasswordField = ({
  fluid,
  id,
  name,
  onChange,
  placeholder,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((show) => !show);
  };

  return (
    <TextField
      fluid={fluid}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      slotProps={{
        input: {
          endAdornment: (
            <button onClick={(e) => handleShowPassword(e)}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
          ),
        },
      }}
      type={showPassword ? "text" : "password"}
    />
  );
};
