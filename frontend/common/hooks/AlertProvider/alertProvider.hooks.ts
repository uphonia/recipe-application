import { useContext } from "react";
import { toast } from "react-toastify";

import { AlertProviderContext } from "./alertProvider.context";

export const useAlertProvider = () => {
  const addSuccessAlert = (message: string) => toast.success(message);
  const addErrorAlert = (message: string) => toast.error(message);

  return {
    addErrorAlert,
    addSuccessAlert,
  };
};

export const useAlertProviderContext = () => {
  const context = useContext(AlertProviderContext);

  return context;
};
