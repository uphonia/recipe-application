import { Recipe } from "../../common/models/Recipe";
import { CreateRecipePayload } from "../payloads/CreateRecipePayload";
import { UpdateRecipePayload } from "../payloads/UpdateRecipePayload";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getRecipes = async () => {
  const response = await fetch(`${API_URL}/api/recipes/`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return response.json();
};

export const getRecipe = async (id: string): Promise<Recipe> => {
  const response = await fetch(`${API_URL}/api/recipes/${id}/`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }
  return response.json();
};

export const createRecipe = async (
  content: CreateRecipePayload,
): Promise<Recipe> => {
  const formData = new FormData();
  Object.entries(content).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      const valueToStore = typeof value === "number" ? value.toString() : value;
      formData.append(key, valueToStore);
    }
  });

  const response = await fetch(`${API_URL}/api/recipes/`, {
    credentials: "include",
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to create recipe.");
  }

  const data: Recipe = await response.json();
  return data;
};

export const deleteRecipe = async (id: string) => {
  const response = await fetch(`${API_URL}/api/recipes/${id}/`, {
    method: "DELETE",
    credentials: "include",
  });

  if (response.status === 204) {
    return { success: true, recipe: id };
  } else {
    const errorData = await response.json();
    console.error(errorData);
  }
};

export const updateRecipe = async (
  content: UpdateRecipePayload,
): Promise<Recipe> => {
  const formData = new FormData();
  Object.entries(content).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, value.toString());
    }
  });

  const response = await fetch(`${API_URL}/api/recipes/${content.id}/`, {
    body: formData,
    method: "PATCH",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }
  return response.json();
};
