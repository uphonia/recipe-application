import { createContext } from "react";

import { AppContextState } from "./appProvider.types";

const initialState: AppContextState = {};

export const AppProviderContext = createContext<AppContextState>(initialState);
