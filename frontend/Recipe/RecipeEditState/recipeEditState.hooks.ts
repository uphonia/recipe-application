import { useRouter } from "next/router";

import { deleteRecipe, updateRecipe } from "../../api/helpers/recipes";
import { useAlertProviderContext } from "../../common/hooks/AlertProvider/alertProvider.hooks";
import { useSwitch } from "../../common/hooks/useSwitch";
import { Recipe } from "../../common/models/Recipe";
import { EditFormValues } from "./recipeEditState.consts";
import { HOME } from "../../common/consts/navigation.consts";

export const useRecipeEditState = (
  handleExitEditState: () => void,
  recipe: Recipe,
  refreshRecipe: (recipe: Recipe) => void,
) => {
  const { push } = useRouter();
  const { addErrorAlert, addSuccessAlert } = useAlertProviderContext();

  const initialValues: EditFormValues = {
    blurb: recipe?.blurb || "",
    ingredients: recipe?.ingredients || "",
    instructions: recipe?.instructions || "",
    name: recipe?.name || "",
    servings: recipe?.servings || 0,
  };

  const handleSave = async (values: EditFormValues) => {
    try {
      const updatedRecipe = await updateRecipe({
        id: recipe.id.toString(),
        ...values,
      });
      const recipeImages = recipe.files;
      refreshRecipe({ ...updatedRecipe, files: recipeImages });
      handleExitEditState();
    } catch {
      addErrorAlert("Failed to update recipe. Please try again.");
    }
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
    closeModal,
    handleDeleteConfirm,
    handleDeleteOnClick,
    handleSave,
    initialValues,
    isModalOpen,
  };
};
