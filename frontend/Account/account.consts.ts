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

export const signUpValidation = object({
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[a-z])/, "Must contain one lowercase letter")
    .matches(/^(?=.*[A-Z])/, "Must contain one uppercase letter")
    .matches(/^(?=.*[0-9])/, "Must contain one number")
    .matches(/^(?=.*[!@#\$%\^&\*])/, "Must contain one special character"),
  passwordConfirm: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords must match"),
  username: string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters")
    .matches(/^[a-zA-Z0-9]+$/, "Username can only contain letters and numbers")
    .matches(/[a-zA-Z]/, "Username cannot be all numbers")
    .matches(
      /^[^!@#$%^&*(),.?":{}|<>]+$/,
      "Username cannot contain special characters",
    ),
});

export const signUpFieldOrder: Array<keyof SignUpFormValues> = [
  "username",
  "password",
  "passwordConfirm",
];

export const passwordRules = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "1 lowercase letter", test: (v: string) => /[a-z]/.test(v) },
  { label: "1 uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "1 number", test: (v: string) => /[0-9]/.test(v) },
  {
    label: "1 special character",
    test: (v: string) => /[!@#$%^&*(),.?":{}|<>]/.test(v),
  },
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
