import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

import { FormValues } from "./createRecipeForm.types";
import { HOME } from "../common/consts/navigation.consts";
import { createRecipe } from "../api/helpers/recipes";
import { useAuth } from "../common/hooks/AuthProvider/authProvider.hooks";
import { addFile, getPresignedUrl, uploadFile } from "../api/helpers/files";
import { useAlertProviderContext } from "../common/hooks/AlertProvider/alertProvider.hooks";

export const useCreateRecipeForm = () => {
  const { push } = useRouter();
  const { user } = useAuth();
  const { addErrorAlert, addSuccessAlert } = useAlertProviderContext();

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (values: FormValues) => {
    if (!user?.id) {
      // TODO - if user is not authenticated, open a modal so user can log back in
      return;
    }

    let createdRecipe = null;

    try {
      createdRecipe = await createRecipe({
        ...values,
        created_by: user.id,
      });
    } catch (error) {
      addErrorAlert("Unable to create recipe. Please try again.");
    }

    let fileRelativePath = "";
    let presignedUrl = "";

    if (file && createdRecipe) {
      const recipeId = createdRecipe.id;

      try {
        const { file_key, upload_url } = await getPresignedUrl({
          fileName: file.name,
          fileType: file.type,
          recipeId: recipeId.toString(),
        });
        fileRelativePath = file_key;
        presignedUrl = upload_url;
      } catch {
        console.error("Failed to generate presigned url. Please try again.");
      }

      try {
        await uploadFile({
          file: file,
          presignedUrl,
        });
      } catch (error) {
        console.error(error);
      }

      try {
        await addFile({
          mimeType: file.type,
          name: file.name,
          recipe: recipeId.toString(),
          relativePath: fileRelativePath,
        });
      } catch (error) {
        console.error(error);
      }
    }
    push(HOME);
    addSuccessAlert("Recipe was successfully created.");
  };

  return {
    handleFileChange,
    handleSubmit,
  };
};
