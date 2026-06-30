export type Recipe = {
  blurb?: string;
  createdAt: string;
  createdBy: string;
  favorited: boolean;
  id: number;
  image?: File;
  ingredients: string;
  instructions: string;
  name: string;
  servings: string;
};
