import { useRouter } from "next/router";
import { LogInFormValues } from "../account.consts";
import { HOME } from "../../common/consts/navigation.consts";
import { logIn } from "../../api/helpers/accounts";
import { useAppContext } from "../../common/hooks/AppProvider/appProvider.hooks";

export const useLogIn = () => {
  const { push } = useRouter();
  const { setUser } = useAppContext();

  const handleSubmit = async (values: LogInFormValues) => {
    logIn({ ...values })
      .then((data) => {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        setUser({ id: data.id });
        push(HOME);
      })
      .catch((error) => {
        // handle error
      });
  };

  return {
    handleSubmit,
  };
};
