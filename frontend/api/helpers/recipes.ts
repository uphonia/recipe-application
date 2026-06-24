import { CreateRecipePayload } from "../payloads/CreateRecipePayload";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getRecipes = async () => {
  const response = await fetch(`${API_URL}/api/recipes/`);

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return response.json();
};

export const getRecipe = async (id: string) => {
  const response = await fetch(`${API_URL}/api/recipes/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }
  return response.json();
};

export const createRecipe = async (content: CreateRecipePayload) => {
  const formData = new FormData();
  Object.entries(content).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      const valueToStore = typeof value === "number" ? value.toString() : value;
      formData.append(key, valueToStore);
    }
  });

  const response = await fetch(`${API_URL}/api/recipes/create/`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to create rescipe.");
  }

  return response.json();
};
