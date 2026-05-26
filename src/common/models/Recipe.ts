export type Recipe = {
  created_at: string;
  id: number;
  name: string;
  servings: string;
  ingredients: string;
  instructions: string;
  blurb?: string;
  image?: File;
};
