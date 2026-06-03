import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { TextField } from "../TextField/TextField";
import { useState } from "react";

type Props = {
  id: string;
  name: string;
};

export const PasswordField = ({ id, name }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((show) => !show);

  return (
    <TextField
      id={id}
      name={name}
      onChange={() => {}}
      slotInputProps={{
        input: {
          endAdornment: (
            <button onClick={handleShowPassword}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
          ),
        },
      }}
      type={showPassword ? "text" : "password"}
    />
  );
};
