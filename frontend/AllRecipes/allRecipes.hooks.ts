import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useSwitch } from "../common/hooks/useSwitch";
import { RECIPE } from "../common/consts/navigation.consts";
import { Recipe } from "../common/models/Recipe";
import { getRecipes } from "../api/helpers/recipes";

export const useAllRecipes = () => {
  const { push } = useRouter();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [indexToDelete, setIndexToDelete] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    isOn: isModalOpen,
    turnOff: closeModal,
    turnOn: openModal,
  } = useSwitch();

  const handleFavoriteOnClick = (index: number) => {
    // API call to set favorite based on index
  };

  const handleOnClick = (index: number) => {
    push(`${RECIPE}/${index}`);
  };

  const handleDeleteOnClick = (index: number) => {
    setIndexToDelete(index);
    openModal();
  };

  const handleDeleteConfirm = () => {
    // API call to delete recipe based on index
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
    handleDeleteOnClick,
    handleDeleteConfirm,
    handleFavoriteOnClick,
    handleOnClick,
    isModalOpen,
    recipes,
  };
};
