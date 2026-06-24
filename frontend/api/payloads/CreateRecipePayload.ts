export type CreateRecipePayload = {
  created_by?: string;
  name: string;
  servings?: number;
  ingredients: string;
  instructions: string;
  blurb?: string;
  image?: File;
};
