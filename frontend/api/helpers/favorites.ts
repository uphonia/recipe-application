import { buildFormData } from "../../common/utils/buildFormData";
import { AddFavoritePayload } from "../payloads/AddFavoritePayload";
import { UnfavoritePayload } from "../payloads/UnfavoritePayload";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addFavorite = async (payload: AddFavoritePayload) => {
  const formData = buildFormData(payload);
  const response = await fetch(`${API_URL}/api/favorites/favorite/`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to favorite recipe");
  }
  return response.json();
};

export const unfavorite = async (payload: UnfavoritePayload) => {
  const formData = buildFormData(payload);

  const response = await fetch(`${API_URL}/api/favorites/unfavorite/`, {
    method: "DELETE",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to unfavorite recipe");
  }
  return response.json();
};
