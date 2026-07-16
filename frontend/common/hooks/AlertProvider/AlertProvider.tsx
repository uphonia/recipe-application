import { ReactNode } from "react";

import { useAlertProvider } from "./alertProvider.hooks";
import { AlertProviderContext } from "./alertProvider.context";
import { Toast } from "../../components/Toast/Toast";

type Props = {
  children: ReactNode;
};

export const AlertProvider = ({ children }: Props) => {
  const state = useAlertProvider();

  return (
    <AlertProviderContext.Provider value={state}>
      {children}
      <Toast />
    </AlertProviderContext.Provider>
  );
};
