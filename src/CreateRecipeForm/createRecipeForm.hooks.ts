import { FormValues } from "./createRecipeForm.types";
import { createRecipe } from "../../backend/api";
import { useRouter } from "next/router";
import { HOME } from "../common/consts/navigation.consts";

export const useCreateRecipeForm = () => {
  const { push } = useRouter();

  const handleSubmit = async (values: FormValues) => {
    createRecipe({ ...values })
      .then(() => push(HOME))
      .catch((error) => {
        // handle error
      });
  };

  return {
    handleSubmit,
  };
};
