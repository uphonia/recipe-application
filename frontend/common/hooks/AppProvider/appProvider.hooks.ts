import { useContext, useMemo, useState } from "react";
import { AppProviderContext } from "./appProvider.context";
import { AppContextState } from "./appProvider.types";

export const useApp = () => {
  const state: AppContextState = useMemo(() => ({}), []);

  return {
    state,
  };
};

export const useAppContext = () => {
  const context = useContext(AppProviderContext);

  return context;
};
