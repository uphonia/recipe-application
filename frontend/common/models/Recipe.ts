export type Recipe = {
  createdAt: string;
  createdBy: string;
  id: number;
  isFavorited: boolean;
  name: string;
  servings: string;
  ingredients: string;
  instructions: string;
  blurb?: string;
  image?: File;
};
