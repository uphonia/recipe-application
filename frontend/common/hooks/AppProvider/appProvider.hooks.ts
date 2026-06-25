import { useContext } from "react";

import { AppProviderContext } from "./appProvider.context";

export const useApp = () => {
  return {};
};

export const useAppContext = () => {
  const context = useContext(AppProviderContext);

  return context;
};
