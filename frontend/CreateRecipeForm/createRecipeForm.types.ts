import { mixed, number, object, string } from "yup";

export type FormValues = {
  blurb?: string;
  ingredients: string;
  instructions: string;
  name: string;
  image?: File;
  servings?: number;
};

export const initialValues: FormValues = {
  blurb: "",
  ingredients: "",
  instructions: "",
  name: "",
  servings: 0,
};

export const validation = object({
  blurb: string().optional(),
  image: mixed().optional(),
  ingredients: string().required("Ingredients are required"),
  instructions: string().required("Instructions are required"),
  name: string().required("Name is required"),
  servings: number().optional(),
});
