import React, { ReactNode } from "react";
import { useApp } from "./appProvider.hooks";
import { AppProviderContext } from "./appProvider.context";

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  const { state } = useApp();

  return (
    <AppProviderContext.Provider value={state}>
      {children}
    </AppProviderContext.Provider>
  );
};
