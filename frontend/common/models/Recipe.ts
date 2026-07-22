import { File } from "./File";

export type Recipe = {
  blurb?: string;
  createdAt: string;
  createdBy: string;
  favorited: boolean;
  fileUrl?: string;
  files?: File[];
  id: number;
  ingredients: string;
  instructions: string;
  name: string;
  servings: string;
};
