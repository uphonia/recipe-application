import { useRouter } from "next/router";
import { logOut } from "../../../api/helpers/accounts";
import { SIGNUP } from "../../consts/navigation.consts";

export const useSideBar = () => {
  const { push } = useRouter();

  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  const handleLogOut = () => {
    logOut()
      .then(() => {
        push(SIGNUP);
      })
      .catch((error) => {
        // handle error
      });
  };

  return {
    handleLogOut,
    isActive,
  };
};
