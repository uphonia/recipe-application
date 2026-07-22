import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Global } from "@emotion/react";

import globalStyles from "../common/styles/global";
import { toastOverrideStyles } from "../common/components/Toast/toast.styles";
import { AppProvider } from "../common/hooks/AppProvider/AppProvider";
import { Layout } from "../common/components/Layout/Layout";
import { SideBar } from "../common/components/SideBar/Sidebar";
import { AuthProvider } from "../common/hooks/AuthProvider/AuthProvider";
import { AlertProvider } from "../common/hooks/AlertProvider/AlertProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showSidebar =
    !router.pathname.includes("signup") && !router.pathname.includes("login");

  return (
    <AlertProvider>
      <AuthProvider>
        <AppProvider>
          <Global styles={[globalStyles, toastOverrideStyles]} />
          <Layout
            sidebar={showSidebar ? <SideBar /> : null}
            content={<Component {...pageProps} />}
          />
        </AppProvider>
      </AuthProvider>
    </AlertProvider>
  );
}
