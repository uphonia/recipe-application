import { useRouter } from "next/router";
import { LogInFormValues } from "../account.consts";
import { HOME } from "../../common/consts/navigation.consts";
import { logIn } from "../../api/helpers/accounts";
import { useAppContext } from "../../common/hooks/AppProvider/appProvider.hooks";
import { FormikHelpers, useFormikContext } from "formik";

export const useLogIn = () => {
  const { push } = useRouter();
  const { setUser } = useAppContext();

  const handleSubmit = async (values: LogInFormValues, { setFieldError }: FormikHelpers<LogInFormValues>) => {
    logIn({ ...values })
      .then((data) => {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        setUser({ id: data.id });
        push(HOME);
      })
      .catch((error) => {
        if (error.message.includes("account")) {
          setFieldError("username", error.message);
        } else if (error.message.includes("password")) {
          setFieldError("password", error.message);
        } 
      });
  };

  return {
    handleSubmit,
  };
};
