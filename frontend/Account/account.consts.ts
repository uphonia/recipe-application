import { object, ref, string } from "yup";

export type SignUpFormValues = {
  password: string;
  passwordConfirm: string;
  username: string;
};

export const signUpInitialValues: SignUpFormValues = {
  password: "",
  passwordConfirm: "",
  username: "",
};

export const signUpValidation = object({
  password: string().required("A password is required"),
  passwordConfirm: string()
    .required("Please enter your password again")
    .oneOf([ref("password"), "Passwords must match"]),
  username: string().required("Username is required"),
});

export type LogInFormValues = {
  password: string;
  username: string;
};

export const logInInitialValues: LogInFormValues = {
  password: "",
  username: "",
};

export const logInValidation = object({
  password: string().required("A password is required"),
  username: string().required("Username is required"),
});
