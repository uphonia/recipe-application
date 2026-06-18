import { useRouter } from "next/router";
import { SignUpFormValues } from "../account.consts";
import { HOME } from "../../common/consts/navigation.consts";
import { signUp } from "../../api/helpers/accounts";

export const useSignUp = () => {
  const { push } = useRouter();

  const handleSubmit = async (values: SignUpFormValues) => {
    signUp({ ...values })
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
