import { useRouter } from "next/router";
import { LogInFormValues } from "../account.consts";
import { HOME } from "../../common/consts/navigation.consts";
import { logIn } from "../../api/helpers/accounts";

export const useLogIn = () => {
  const { push } = useRouter();

  const handleSubmit = async (values: LogInFormValues) => {
    logIn({ ...values })
      .then((data) => {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
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
