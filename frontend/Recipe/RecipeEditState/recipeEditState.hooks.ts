import { Recipe } from "../../common/models/Recipe";
import { EditFormValues } from "./recipeEditState.consts";

export const useRecipeEditState = (recipe: Recipe) => {
  const initialValues: EditFormValues = {
    blurb: recipe?.blurb,
    ingredients: recipe?.ingredients || "",
    instructions: recipe?.instructions || "",
    name: recipe?.name || "",
    servings: parseInt(recipe?.servings || "0"),
  };

  return { initialValues };
};
