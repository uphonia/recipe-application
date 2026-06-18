import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Global } from "@emotion/react";

import globalStyles from "../common/styles/global";
import { AppProvider } from "../common/hooks/AppProvider/AppProvider";
import { Sidebar } from "../common/components/SideBar/Sidebar";
import { Layout } from "../common/components/Layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showSidebar =
    !router.pathname.includes("signup") && !router.pathname.includes("login");

  return (
    <AppProvider>
      <Global styles={globalStyles} />
      <Layout
        sidebar={showSidebar ? <Sidebar /> : null}
        content={<Component {...pageProps} />}
      />
    </AppProvider>
  );
}
