const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getRecipes = async () => {
  const response = await fetch(`${API_URL}/api/recipes/`);
  const data = await response.json();
  return data;
};
