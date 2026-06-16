export type CreateRecipePayload = {
  name: string;
  servings: string;
  ingredients: string;
  instructions: string;
  blurb?: string;
  image?: File;
};
