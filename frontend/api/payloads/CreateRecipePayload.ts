export type CreateRecipePayload = {
  name: string;
  servings?: number;
  ingredients: string;
  instructions: string;
  blurb?: string;
  image?: File;
};
