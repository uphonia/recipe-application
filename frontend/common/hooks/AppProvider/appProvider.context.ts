import { createContext } from "react";

import { AppContextState } from "./appProvider.types";

const initialState: AppContextState = {
  setUser: () => {},
  user: null,
};

export const AppProviderContext = createContext<AppContextState>(initialState);
