import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Recipe } from "../common/models/Recipe";
import { getRecipe } from "../api/helpers/recipes";

import { SWITCHES } from "./recipe.consts";
import { addFavorite, removeFavorite } from "../api/helpers/favorites";
import { useAlertProviderContext } from "../common/hooks/AlertProvider/alertProvider.hooks";
import { useAuth } from "../common/hooks/AuthProvider/authProvider.hooks";

export const useRecipe = () => {
  const { addErrorAlert } = useAlertProviderContext();
  const { user } = useAuth();
  const currentUserId = user?.id;

  const { query } = useRouter();
  const recipeId = query.id ? query.id[0] : null;

  const [active, setActive] = useState<string>(SWITCHES.INGREDIENTS);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditState, setIsEditState] = useState(false);

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

  const subActionText = `${recipe?.favorited ? "Remove from " : "Add to "} favorites`;

  useEffect(() => {
    const fetchRecipe = async (recipeId: string) => {
      try {
        const recipeData = await getRecipe(recipeId);
        setRecipe(recipeData);
      } catch (error) {
        addErrorAlert("Could not retrieve recipe. Please try again.");
      }
      setIsLoading(false);
    };
    if (recipeId) fetchRecipe(recipeId);
  }, [recipeId]);

  const recipeCreatedBy = recipe?.createdBy;
  const isOwner = recipeCreatedBy === currentUserId;

  const handleFavoriteOnClick = async () => {
    const favoritedStatus = recipe?.favorited;

    if (!recipe) {
      addErrorAlert("Cound not retrieve recipe. Please try again.");
      return;
    }

    setRecipe((prevRecipe) => {
      if (!prevRecipe) {
        addErrorAlert("Cound not retrieve recipe. Please try again.");
        return prevRecipe;
      }

      return {
        ...prevRecipe,
        favorited: !prevRecipe.favorited,
      };
    });

    try {
      favoritedStatus
        ? await removeFavorite({
            recipe: recipe.id,
          })
        : await addFavorite({
            recipe: recipe.id,
          });
    } catch {
      setRecipe((prevRecipe) => {
        if (!prevRecipe) return prevRecipe;

        return {
          ...prevRecipe,
          favorited: !prevRecipe.favorited,
        };
      });
      addErrorAlert("Failed to save favorite. Please try again.");
    }
  };

  const handleEditOnClick = () => {
    setIsEditState(true);
  };

  const handleSaveOnClick = () => {
    // TODO - call function to save updates to Recipe
    setIsEditState(false);
  };

  return {
    active,
    getContent,
    handleEditOnClick,
    handleFavoriteOnClick,
    handleSaveOnClick,
    isEditState,
    isLoading,
    isOwner,
    recipe,
    setActive,
    subActionText,
  };
};
