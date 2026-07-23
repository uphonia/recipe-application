import { SWITCHES } from "../recipe.consts";
import { EditFormValues } from "./recipeEditState.consts";

export const getFormValue = (
  formValue: EditFormValues,
  currentSwitch: string,
) => {
  switch (currentSwitch) {
    case SWITCHES.BLURB:
      return formValue.blurb;
    case SWITCHES.INGREDIENTS:
      return formValue.ingredients;
    case SWITCHES.INSTRUCTIONS:
      return formValue.instructions;
    default:
      return "";
  }
};
