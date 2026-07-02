import { object, ref, string } from "yup";

// signup
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

// TODO - add strict password requirements
export const signUpValidation = object({
  password: string().required("Password is required"),
  passwordConfirm: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords must match"),
  username: string().required("Username is required"),
});

export const signUpFieldOrder: Array<keyof SignUpFormValues> = [
  "username",
  "password",
  "passwordConfirm",
];

// login
export type LogInFormValues = {
  password: string;
  username: string;
};

export const logInInitialValues: LogInFormValues = {
  password: "",
  username: "",
};

export const logInValidation = object({
  password: string().required("Password is required"),
  username: string().required("Username is required"),
});
