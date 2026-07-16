import { createContext } from "react";

import { AlertContextState } from "./alertProvider.types";

const initialState: AlertContextState = {
  addErrorAlert: () => {},
  addSuccessAlert: () => {},
};

export const AlertProviderContext =
  createContext<AlertContextState>(initialState);
