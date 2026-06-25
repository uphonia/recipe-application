import { createContext } from "react";

import { AuthContextState } from "./authProvider.types";

const initialState: AuthContextState = {
  setUser: () => {},
  user: null,
  userLoading: true,
};

export const AuthProviderContext =
  createContext<AuthContextState>(initialState);
