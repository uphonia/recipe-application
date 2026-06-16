import { useState, useEffect } from "react";

import { breakpoints } from "../utils/mediaQueries";

export const useMatchMedia = ({
  breakpoint = breakpoints.large,
  customMediaQuery = "",
  mediaQuery = "min-width",
  unit = "px",
} = {}) => {
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      customMediaQuery || `(${mediaQuery}: ${breakpoint}${unit})`
    );
    const handleUpdate = () => setIsMatched(query.matches);

    handleUpdate();
    query.addEventListener("change", handleUpdate);

    return () => query.removeEventListener("change", handleUpdate);
  }, [mediaQuery, breakpoint, unit, customMediaQuery]);

  return isMatched;
};
