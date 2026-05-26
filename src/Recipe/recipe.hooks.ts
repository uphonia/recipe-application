import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getRecipe } from "../../backend/api";

import { SWITCHES } from "./recipe.consts";
import { Recipe } from "../common/models/Recipe";

export const useRecipe = () => {
  const { query } = useRouter();
  const recipeId = query.id ? query.id[0] : null;

  const [active, setActive] = useState<string | null>(SWITCHES.INGREDIENTS);
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const getContent = () => {
    switch (active) {
      case SWITCHES.BLURB:
        return recipe?.blurb || "No blurb";
      case SWITCHES.INGREDIENTS:
        return recipe?.ingredients || "No ingredients listed";
      case SWITCHES.INSTRUCTIONS:
        return recipe?.instructions || "No instructions listed";
      default:
        return "";
    }
  };

  const subActionText = `${recipe?.isFavorited ? "Remove from " : "Add to "} favorites`;

  useEffect(() => {
    if (recipeId) getRecipe(recipeId).then((data) => setRecipe(data));
  });

  return {
    active,
    getContent,
    recipe,
    setActive,
    subActionText,
  };
};
