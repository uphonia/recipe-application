import { useRouter } from "next/router";

import { logOut } from "../../../api/helpers/accounts";
import { LOGIN } from "../../consts/navigation.consts";
import { useAlertProviderContext } from "../../hooks/AlertProvider/alertProvider.hooks";

export const useSideBar = () => {
  const router = useRouter();
  const { addErrorAlert } = useAlertProviderContext();

  const isActive = (path: string) => router.pathname === path;

  const handleLogOut = async () => {
    try {
      await logOut();
      window.location.href = LOGIN;
    } catch (error) {
      addErrorAlert("Unable to log out. Please try again.");
    }
  };

  return {
    handleLogOut,
    isActive,
  };
};
