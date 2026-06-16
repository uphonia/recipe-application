import { mixed, object, string } from "yup";

export type FormValues = {
  blurb?: string;
  ingredients: string;
  instructions: string;
  name: string;
  image?: File;
  servings: string;
};

export const initialValues: FormValues = {
  blurb: "",
  image: undefined,
  ingredients: "",
  instructions: "",
  name: "",
  servings: "",
};

export const validation = object({
  blurb: string().optional(),
  image: mixed().optional(),
  ingredients: string().required("Ingredients are required"),
  instructions: string().required("Instructions are required"),
  name: string().required("Name is required"),
  servings: string().required("Servings is required"),
});
