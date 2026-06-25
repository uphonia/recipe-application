import { useRouter } from "next/router";
import { useState } from "react";

import { FormValues } from "./createRecipeForm.types";
import { HOME } from "../common/consts/navigation.consts";
import { createRecipe } from "../api/helpers/recipes";
import { useAuth } from "../common/hooks/AuthProvider/authProvider.hooks";

export const useCreateRecipeForm = () => {
  const { push } = useRouter();
  const { user } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (values: FormValues) => {
    if (!user?.id) {
      // TODO - if user is not authenticated, open a modal so user can log back in

      return;
    }

    try {
      await createRecipe({ ...values, created_by: user.id });
      push(HOME);
    } catch (error) {
      setError("Unable to create recipe. Please try again.");
    }
  };

  return {
    error,
    handleSubmit,
  };
};
