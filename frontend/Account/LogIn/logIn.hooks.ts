import { useRouter } from "next/router";
import { FormikHelpers } from "formik";

import { LogInFormValues } from "../account.consts";
import { HOME } from "../../common/consts/navigation.consts";
import { logIn } from "../../api/helpers/accounts";
import { useAuth } from "../../common/hooks/AuthProvider/authProvider.hooks";

export const useLogIn = () => {
  const { push } = useRouter();
  const { setUser } = useAuth();

  const handleSubmit = async (
    values: LogInFormValues,
    { setFieldError }: FormikHelpers<LogInFormValues>,
  ) => {
    try {
      const logInData = await logIn({ ...values });
      setUser({ id: logInData.id });
      push(HOME);
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message.includes("account")) {
          setFieldError("username", error.message);
        } else if (error.message.includes("password")) {
          setFieldError("password", error.message);
        }
      }
    }
  };

  return {
    handleSubmit,
  };
};
