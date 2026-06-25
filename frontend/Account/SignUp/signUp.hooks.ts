import { useRouter } from "next/router";
import { SignUpFormValues } from "../account.consts";
import { HOME } from "../../common/consts/navigation.consts";
import { signUp } from "../../api/helpers/accounts";
import { useAuth } from "../../common/hooks/AuthProvider/authProvider.hooks";

export const useSignUp = () => {
  const { push } = useRouter();
  const { setUser } = useAuth();

  const handleSubmit = async (values: SignUpFormValues) => {
    try {
      const signUpData = await signUp({ ...values });
      setUser({ id: signUpData.id });
      push(HOME);
    } catch (error) {
      // TODO - handle error
    }
  };

  return {
    handleSubmit,
  };
};
