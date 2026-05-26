export type Recipe = {
  created_at: string;
  id: number;
  isFavorited: boolean;
  name: string;
  servings: string;
  ingredients: string;
  instructions: string;
  blurb?: string;
  image?: File;
};
