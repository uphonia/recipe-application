import { isEmptyHtml } from "../../common/utils/isEmptyHtml";
import { SWITCHES } from "../recipe.consts";
import { EditFormValues } from "./recipeEditState.consts";

export const getFormValue = (
  formValue: EditFormValues,
  currentSwitch: string,
) => {
  let currentFormValue = "";

  switch (currentSwitch) {
    case SWITCHES.BLURB:
      currentFormValue = formValue.blurb || "";
      break;
    case SWITCHES.INGREDIENTS:
      currentFormValue = formValue.ingredients || "";
      break;
    case SWITCHES.INSTRUCTIONS:
      currentFormValue = formValue.instructions || "";
      break;
    default:
      return "";
  }

  return isEmptyHtml(currentFormValue) ? "" : currentFormValue;
};
