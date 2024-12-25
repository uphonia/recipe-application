import { useCallback, useState } from "react";

export const useSwitch = ({
  isOn: initialIsOn = false,
}: {
  isOn?: boolean;
} = {}) => {
  const [isOn, setIsOn] = useState(initialIsOn);

  const toggle = useCallback(() => setIsOn((prevIsOn) => !prevIsOn), []);
  const turnOff = useCallback(() => setIsOn(false), []);
  const turnOn = useCallback(() => setIsOn(true), []);

  return {
    isOff: !isOn,
    isOn,
    toggle,
    turnOff,
    turnOn,
  };
};
