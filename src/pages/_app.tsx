import type { AppProps } from "next/app";
import React from "react";
import { Global } from "@emotion/react";

import { AppProvider } from "../common/hooks/AppProvider/AppProvider";
import globalStyles from "../common/styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </AppProvider>
  );
}

