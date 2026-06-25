import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Recipe } from "../common/models/Recipe";
import { getRecipe } from "../api/helpers/recipes";

import { SWITCHES } from "./recipe.consts";

export const useRecipe = () => {
  const { query } = useRouter();
  const recipeId = query.id ? query.id[0] : null;

  const [active, setActive] = useState<string | null>(SWITCHES.INGREDIENTS);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
    const fetchRecipe = async (recipeId: string) => {
      try {
        const recipeData = await getRecipe(recipeId);
        setRecipe(recipeData);
      } catch (error) {
        // handle error
      }
      setIsLoading(false);
    };
    if (recipeId) fetchRecipe(recipeId);
  }, [recipeId]);

  return {
    active,
    getContent,
    isLoading,
    recipe,
    setActive,
    subActionText,
  };
};
