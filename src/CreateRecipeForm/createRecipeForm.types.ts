export type FormValues = {
  blurb?: string;
  name: string;
  numServings: string;
  image?: string;
  ingredients: string[];
  instructions: string[];
};

export const initialValues: FormValues = {
  blurb: "",
  name: "",
  numServings: "",
  image: "",
  ingredients: [],
  instructions: [],
};
