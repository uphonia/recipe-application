import type { AppProps } from "next/app";
import React from "react";
import { Global } from "@emotion/react";

import { AppProvider } from "../common/hooks/AppProvider/AppProvider";
import globalStyles from "../common/styles/global";
import { Layout } from "../common/components/Layout/Layout";
import { Sidebar } from "../common/components/SideBar/Sidebar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Global styles={globalStyles} />
      <Layout sidebar={<Sidebar />} content={<Component {...pageProps} />} />
    </AppProvider>
  );
}

