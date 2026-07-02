import { useRouter } from "next/router";

import { signUp } from "../../api/helpers/accounts";
import { SignUpFormValues } from "../account.consts";
import { HOME } from "../../common/consts/navigation.consts";
import { useAuth } from "../../common/hooks/AuthProvider/authProvider.hooks";

export const useSignUp = () => {
  const { push } = useRouter();
  const { setUser } = useAuth();

  const handleSubmit = async (values: SignUpFormValues, actions: any) => {
    try {
      const signUpData = await signUp({ ...values });
      setUser({ id: signUpData.id });
      push(HOME);
    } catch (error) {
      const apiError = error as DjangoValidationError;

      if (apiError.isValidationError) {
        const formikErrors: Record<string, string> = {};
        Object.keys(apiError.fields).forEach((key) => {
          formikErrors[key] = apiError.fields[key][0];
        });

        actions.setErrors(formikErrors);
      }
    } finally {
      actions.setSubmitting(false);
    }
  };

  return {
    handleSubmit,
  };
};
