import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useSwitch } from "../common/hooks/useSwitch";
import { RECIPE } from "../common/consts/navigation.consts";
import { Recipe } from "../common/models/Recipe";
import { getRecipes } from "../api/helpers/recipes";
import { useAuth } from "../common/hooks/AuthProvider/authProvider.hooks";
import { addFavorite, removeFavorite } from "../api/helpers/favorites";
import { useAlertProviderContext } from "../common/hooks/AlertProvider/alertProvider.hooks";

export const useAllRecipes = () => {
  const { push } = useRouter();
  const { user } = useAuth();
  const { addErrorAlert, addSuccessAlert } = useAlertProviderContext();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const {
    isOn: isModalOpen,
    turnOff: closeModal,
    turnOn: openModal,
  } = useSwitch();

  const handleFavoriteOnClick = async (recipeId: number) => {
    if (!user) {
      // TODO - open modal to relog in
      return;
    }

    const recipe = recipes.find((recipe) => recipe.id === recipeId);
    if (!recipe) {
      addErrorAlert("Could not retrieve recipe. Please try again.");
      return;
    }
    const favoritedStatus = recipe.favorited;

    // optimistically update UI to show recipe was favorited
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) => {
        return recipe.id === recipeId
          ? { ...recipe, favorited: !recipe.favorited }
          : recipe;
      }),
    );

    try {
      if (favoritedStatus) {
        await removeFavorite({
          recipe: recipeId,
        });
        addSuccessAlert(`Removed "${recipe.name}" from Favorites`);
      } else {
        await addFavorite({
          recipe: recipeId,
        });
        addSuccessAlert(`Added "${recipe.name}" to Favorites`);
      }
    } catch {
      // rollback if request failed
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) =>
          recipe.id === recipeId
            ? { ...recipe, favorited: !recipe.favorited }
            : recipe,
        ),
      );
      addErrorAlert("Failed to save favorite. Please try again.");
    }
  };

  const handleOnClick = (recipeId: number) => {
    push(`${RECIPE}/${recipeId}`);
  };

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const recipeData = await getRecipes();
        setRecipes(recipeData);
      } catch (error) {
        addErrorAlert("Could not retrieve recipes. Please try again");
      }
      setIsLoading(false);
    };
    handleFetch();
  }, []);

  return {
    closeModal,
    currentUserId: user?.id,
    handleFavoriteOnClick,
    handleOnClick,
    isLoading,
    isModalOpen,
    recipes,
  };
};
