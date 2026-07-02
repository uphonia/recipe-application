import { useRouter } from "next/router";

import { LogInFormValues } from "../account.consts";
import { HOME } from "../../common/consts/navigation.consts";
import { logIn } from "../../api/helpers/accounts";
import { useAuth } from "../../common/hooks/AuthProvider/authProvider.hooks";

export const useLogIn = () => {
  const { push } = useRouter();
  const { setUser } = useAuth();

  const handleSubmit = async (values: LogInFormValues, actions: any) => {
    try {
      const logInData = await logIn({ ...values });
      setUser({ id: logInData.id });
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
