import { useState } from "react";
import { ContentEditableEvent } from "react-simple-wysiwyg";
import { FormValues } from "./createRecipeForm.types";
import { createRecipe } from "../../backend/api";
import { useRouter } from "next/router";
import { HOME } from "../common/consts/navigation.consts";

export const useCreateRecipeForm = () => {
  const { push } = useRouter();

  const handleSubmit = async (values: FormValues) => {
    const recipeData = await createRecipe({ ...values });
    if (recipeData) push(HOME);
    else {
      // TODO - error handling
    }
  };

  return {
    handleSubmit,
  };
};
