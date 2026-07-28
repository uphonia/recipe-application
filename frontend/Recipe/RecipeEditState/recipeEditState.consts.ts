import { number, object, string } from "yup";

export type EditFormValues = {
  blurb?: string;
  ingredients: string;
  instructions: string;
  name: string;
  servings?: string;
};

export const validation = object({
  blurb: string().optional(),
  ingredients: string().required("Ingredients are required"),
  instructions: string().required("Instructions are required"),
  name: string().required("Name is required"),
  servings: number().optional(),
});
