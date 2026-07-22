import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { User } from "../../models/User";
import { me } from "../../../api/helpers/accounts";
import { LOGIN, SIGNUP } from "../../consts/navigation.consts";

import { AuthProviderContext } from "./authProvider.context";
import { useAlertProviderContext } from "../AlertProvider/alertProvider.hooks";

export const useAuthProvider = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState(true);
  const { pathname } = useRouter();
  const { addErrorAlert } = useAlertProviderContext();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const meData = await me();
        setUser(meData);
      } catch {
        setUser(null);
        if (pathname !== SIGNUP && pathname !== LOGIN) {
          window.location.href = LOGIN;
        }
      }
      setUserLoading(false);
      addErrorAlert("Unable to log in. Please try again.");
    };

    fetchUser();
  }, []);

  return {
    user,
    userLoading,
    setUser,
  };
};

export const useAuth = () => {
  const context = useContext(AuthProviderContext);

  return context;
};
