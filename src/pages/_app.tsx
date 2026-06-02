import type { AppProps } from "next/app";
import { Global } from "@emotion/react";

import { AppProvider } from "../common/hooks/AppProvider/AppProvider";
import globalStyles from "../common/styles/global";
import { Layout } from "../common/components/Layout/Layout";
import { Sidebar } from "../common/components/SideBar/Sidebar";
import { useRouter } from "next/router";
import { ROOT } from "../common/consts/navigation.consts";

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
