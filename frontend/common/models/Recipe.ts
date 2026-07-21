export type Recipe = {
  blurb?: string;
  createdAt: string;
  createdBy: string;
  favorited: boolean;
  fileUrl?: string;
  id: number;
  ingredients: string;
  instructions: string;
  name: string;
  servings: string;
};
