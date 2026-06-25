import { ReactNode } from "react";

import { useAuthProvider } from "./authProvider.hooks";
import { AuthProviderContext } from "./authProvider.context";

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const state = useAuthProvider();

  return (
    <AuthProviderContext.Provider value={state}>
      {children}
    </AuthProviderContext.Provider>
  );
};
