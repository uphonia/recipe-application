import { useRouter } from "next/router";
import { SignUpFormValues } from "../account.consts";
import { HOME } from "../../common/consts/navigation.consts";
import { signUp } from "../../api/helpers/accounts";
import { useAppContext } from "../../common/hooks/AppProvider/appProvider.hooks";

export const useSignUp = () => {
  const { push } = useRouter();
  const { setUser } = useAppContext();

  const handleSubmit = async (values: SignUpFormValues) => {
    signUp({ ...values })
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
