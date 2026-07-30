import { updateRecipe } from "../../api/helpers/recipes";
import { useAlertProviderContext } from "../../common/hooks/AlertProvider/alertProvider.hooks";
import { Recipe } from "../../common/models/Recipe";
import { EditFormValues } from "./recipeEditState.consts";

export const useRecipeEditState = (
  handleExitEditState: () => void,
  recipe: Recipe,
  refreshRecipe: (recipe: Recipe) => void,
) => {
  const { addErrorAlert } = useAlertProviderContext();

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

  return { handleSave, initialValues };
};
