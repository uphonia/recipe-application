import React from "react";
import { Global } from "@emotion/react";
import globalStyles from "./common/styles/global";
import { AllRecipes } from "./AllRecipes/AllRecipes";
import { AppProvider } from "./common/hooks/AppProvider/AppProvider";

export const App = () => {
  return (
    // <AppProvider>
    //   <Global styles={globalStyles} />
    //   <AllRecipes />
    // </AppProvider>
    <div>HI</div>
  );
};
