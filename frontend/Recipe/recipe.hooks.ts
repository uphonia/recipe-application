import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Recipe } from "../common/models/Recipe";
import { deleteRecipe, getRecipe } from "../api/helpers/recipes";

import { SWITCHES } from "./recipe.consts";
import { addFavorite, removeFavorite } from "../api/helpers/favorites";
import { useAlertProviderContext } from "../common/hooks/AlertProvider/alertProvider.hooks";
import { useAuth } from "../common/hooks/AuthProvider/authProvider.hooks";
import { useSwitch } from "../common/hooks/useSwitch";
import { HOME } from "../common/consts/navigation.consts";

export const useRecipe = () => {
  const { addErrorAlert, addSuccessAlert } = useAlertProviderContext();
  const { user } = useAuth();
  const currentUserId = user?.id;

  const { push, query } = useRouter();
  const recipeId = query.id ? query.id[0] : null;

  const [activeTab, setActiveTab] = useState<string>(SWITCHES.INGREDIENTS);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditState, setIsEditState] = useState(false);

  const getContent = () => {
    switch (activeTab) {
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
      if (favoritedStatus) {
        await removeFavorite({
          recipe: recipe.id,
        });
        addSuccessAlert(`Removed from Favorites`);
      } else {
        await addFavorite({
          recipe: recipe.id,
        });
        addSuccessAlert(`Added to Favorites`);
      }
    } catch {
      setRecipe((prevRecipe) => {
        if (!prevRecipe) return prevRecipe;

        return {
          ...prevRecipe,
          favorited: !prevRecipe.favorited,
        };
      });
      addErrorAlert("Failed to favorite recipe. Please try again.");
    }
  };

  const refreshRecipe = (recipe: Recipe) => {
    setRecipe(recipe);
  };

  const {
    isOn: isModalOpen,
    turnOff: closeModal,
    turnOn: openModal,
  } = useSwitch();

  const handleDeleteOnClick = () => {
    openModal();
  };

  const handleDeleteConfirm = async () => {
    if (!recipe) return;
    try {
      await deleteRecipe(recipe.id.toString());
    } catch (error) {
      addErrorAlert("Failed to delete recipe. Please try again.");
    }
    closeModal();
    push(HOME);
    addSuccessAlert(`"${recipe.name}" was successfully deleted.`);
  };

  return {
    activeTab,
    closeModal,
    getContent,
    handleDeleteConfirm,
    handleDeleteOnClick,
    handleFavoriteOnClick,
    isEditState,
    isLoading,
    isModalOpen,
    isOwner,
    recipe,
    refreshRecipe,
    setActiveTab,
    setIsEditState,
    subActionText,
  };
};
