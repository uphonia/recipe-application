import { ChangeEventHandler, MouseEvent, useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { TextField } from "../TextField/TextField";

type Props = {
  id: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const PasswordField = ({ id, name, onChange }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((show) => !show);
  };

  return (
    <TextField
      id={id}
      name={name}
      onChange={onChange}
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
