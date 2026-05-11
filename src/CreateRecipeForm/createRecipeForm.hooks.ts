import { useState } from "react";
import { ContentEditableEvent } from "react-simple-wysiwyg";

export const useCreateRecipeForm = () => {
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const onStepsChange = (e: ContentEditableEvent) => {
    setSteps(e.target.value);
  };

  const onIngredientsChange = (e: ContentEditableEvent) => {
    setIngredients(e.target.value);
  };

  const handleSubmit = () => {
    // call API to submit form data
  };

  return {
    handleSubmit,
    ingredients,
    onIngredientsChange,
    onStepsChange,
    setSteps,
    steps,
  };
};
