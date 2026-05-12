import React from "react";

import { Wrapper, Switch } from "./switchSelector.styles";
import { Typography } from "../Typography/Typography";

type Props = {
  activeSwitch: string | null;
  onSelect: (label: string) => void;
  switches: string[];
};

export const SwitchSelector = ({ activeSwitch, onSelect, switches }: Props) => {
  return (
    <Wrapper>
      {switches.map((label) => (
        <Switch
          key={label}
          isActive={activeSwitch === label}
          onClick={() => onSelect(label)}
        >
          <Typography variant="h6">{label}</Typography>
        </Switch>
      ))}
    </Wrapper>
  );
};
