import React from "react";

import { Global } from "@emotion/react";
import { AppProvider } from "../common/hooks/AppProvider/AppProvider";
import globalStyles from "../common/styles/global";
import { AllRecipes } from "../AllRecipes/AllRecipes";

const App = () => {
  return (
    <AppProvider>
      <Global styles={globalStyles} />
      <AllRecipes />
    </AppProvider>
  );
};

export default App;
