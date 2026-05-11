import { useState } from "react";
import { Wrapper, Switch } from "./switchSelector.styles";

type Props = {
  switches: string[];
};

export const SwitchSelector = ({ switches }: Props) => {
  const [active, setActive] = useState<string | null>(switches[0]);
  const onClick = (label: string) => {
    if (active === label) return;
    setActive(label);
  };

  return (
    <Wrapper>
      {switches.map((label) => (
        <Switch
          key={label}
          isActive={active === label}
          onClick={() => onClick(label)}
        >
          {label}
        </Switch>
      ))}
    </Wrapper>
  );
};
