import { buildFormData } from "../../common/utils/buildFormData";
import { AddFavoritePayload } from "../payloads/AddFavoritePayload";
import { RemoveFavoritePayload } from "../payloads/RemoveFavoritePayload";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addFavorite = async (payload: AddFavoritePayload) => {
  const formData = buildFormData(payload);

  const response = await fetch(`${API_URL}/api/favorites/add_favorite/`, {
    body: formData,
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to favorite recipe");
  }
  return response.json();
};

export const removeFavorite = async (payload: RemoveFavoritePayload) => {
  const response = await fetch(
    `${API_URL}/api/favorites/${payload.recipe}/remove_favorite/`,
    {
      method: "DELETE",
      credentials: "include",
    },
  );

  if (response.status === 204) {
    return { success: true, recipe: payload.recipe };
  } else {
    const errorData = await response.json();
    console.error(errorData);
  }
};
