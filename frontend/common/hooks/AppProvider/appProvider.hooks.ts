import { useContext, useState } from "react";
import { AppProviderContext } from "./appProvider.context";
import { User } from "../../models/User";

export const useApp = () => {
  const [user, setUser] = useState<User | null>(null);

  return {
    user,
    setUser,
  };
};

export const useAppContext = () => {
  const context = useContext(AppProviderContext);

  return context;
};
