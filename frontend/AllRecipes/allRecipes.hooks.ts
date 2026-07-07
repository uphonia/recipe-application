import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useSwitch } from "../common/hooks/useSwitch";
import { RECIPE } from "../common/consts/navigation.consts";
import { Recipe } from "../common/models/Recipe";
import { deleteRecipe, getRecipes } from "../api/helpers/recipes";
import { useAuth } from "../common/hooks/AuthProvider/authProvider.hooks";
import { addFavorite, removeFavorite } from "../api/helpers/favorites";

export const useAllRecipes = () => {
  const { push } = useRouter();
  const { user } = useAuth();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipeToDelete, setRecipeToDelete] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    isOn: isModalOpen,
    turnOff: closeModal,
    turnOn: openModal,
  } = useSwitch();

  const handleFavoriteOnClick = async (recipeId: number) => {
    if (!user) {
      // TODO - feedback
      return;
    }

    // get recipe favorited status
    const recipe = recipes.find((recipe) => recipe.id === recipeId);
    if (!recipe) {
      // TODO - better error UI
      console.error("Could not find recipe. Please try again.");
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
      favoritedStatus
        ? await removeFavorite({
            recipe: recipeId,
          })
        : await addFavorite({
            recipe: recipeId,
          });
    } catch {
      // rollback if request failed
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) =>
          recipe.id === recipeId
            ? { ...recipe, favorited: !recipe.favorited }
            : recipe,
        ),
      );
      // TODO - better error UI
      console.error("Failed to save favorite. Please try again.");
    }
  };

  const handleOnClick = (recipeId: number) => {
    push(`${RECIPE}/${recipeId}`);
  };

  const handleDeleteOnClick = (recipeId: number) => {
    setRecipeToDelete(recipeId);
    openModal();
  };

  const handleDeleteConfirm = async () => {
    if (!recipeToDelete) {
      // TODO - feedback
      return;
    }
    const deletedRecipe = recipes.find((r) => r.id === recipeToDelete);

    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => {
        return recipe.id !== recipeToDelete;
      }),
    );

    try {
      await deleteRecipe(recipeToDelete.toString());
    } catch (error) {
      console.error("Failed to delete recipe. Please try again.");
      setRecipes((prevRecipes) =>
        deletedRecipe ? [...prevRecipes, deletedRecipe] : prevRecipes,
      );
    }
    closeModal();
  };

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const recipeData = await getRecipes();
        setRecipes(recipeData);
      } catch (error) {
        // handle error
      }
      setIsLoading(false);
    };
    handleFetch();
  }, []);

  return {
    closeModal,
    currentUserId: user?.id,
    handleDeleteOnClick,
    handleDeleteConfirm,
    handleFavoriteOnClick,
    handleOnClick,
    isModalOpen,
    recipes,
  };
};
