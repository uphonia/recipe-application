import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Global } from "@emotion/react";

import globalStyles from "../common/styles/global";
import { AppProvider } from "../common/hooks/AppProvider/AppProvider";
import { Layout } from "../common/components/Layout/Layout";
import { SideBar } from "../common/components/SideBar/Sidebar";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showSidebar =
    !router.pathname.includes("signup") && !router.pathname.includes("login");

  return (
    <AppProvider>
      <Global styles={globalStyles} />
      <Layout
        sidebar={showSidebar ? <SideBar /> : null}
        content={<Component {...pageProps} />}
      />
    </AppProvider>
  );
}
