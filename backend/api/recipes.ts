import { CreateRecipePayload } from "../consts/CreateRecipePayload";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getRecipes = async () => {
  const response = await fetch(`${API_URL}/api/recipes/`);
  const data = await response.json();
  return data;
};

export const getRecipe = async (id: string) => {
  const response = await fetch(`${API_URL}/api/recipes/${id}`);
  const data = await response.json();
  return data;
};

export const createRecipe = async (content: CreateRecipePayload) => {
  const formData = new FormData();
  Object.entries(content).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  const response = await fetch(`${API_URL}/api/recipes/create/`, {
    method: "POST",
    body: formData,
  });

  return await response.json();
};
