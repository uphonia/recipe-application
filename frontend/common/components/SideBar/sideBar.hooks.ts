import { useRouter } from "next/router";

import { logOut } from "../../../api/helpers/accounts";
import { LOGIN } from "../../consts/navigation.consts";

export const useSideBar = () => {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  const handleLogOut = async () => {
    try {
      await logOut();
      window.location.href = LOGIN;
    } catch (error) {
      // TODO - handle error
    }
  };

  return {
    handleLogOut,
    isActive,
  };
};
