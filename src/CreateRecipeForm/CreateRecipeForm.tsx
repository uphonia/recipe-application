import React from "react";

import { Formik } from "formik";
import Editor from "react-simple-wysiwyg";

import {
  FormWrapper,
  Label,
  OptionalNote,
  Input,
  Footer,
  TextArea,
  FileInput,
} from "./createRecipeForm.styles";
import { initialValues } from "./createRecipeForm.types";
import { FieldWrapper } from "../common/components/FieldWrapper/FieldWrapper";
import {
  IMAGE_FORMATS,
  INGREDIENTS_INPUT_PLACEHOLDER,
  INSTRUCTIONS_INPUT_PLACEHOLDER,
} from "./createRecipeForm.consts";
import { useCreateRecipeForm } from "./createRecipeForm.hooks";
import { Button } from "../common/components/Button/Button";

export const CreateRecipeForm = () => {
  const { ingredients, onIngredientsChange, onStepsChange, steps } =
    useCreateRecipeForm();

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {({ handleChange, isSubmitting, resetForm }) => (
        <FormWrapper>
          <FieldWrapper>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" onChange={handleChange} />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="numServings"># of Servings</Label>
            <Input
              id="numServings"
              name="numServings"
              onChange={handleChange}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Label>Ingredients</Label>
            <Editor
              value={ingredients}
              onChange={onIngredientsChange}
              placeholder={INGREDIENTS_INPUT_PLACEHOLDER}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Label>Steps</Label>
            <Editor
              value={steps}
              onChange={onStepsChange}
              placeholder={INSTRUCTIONS_INPUT_PLACEHOLDER}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="image">Image</Label>
            <FileInput
              accept={IMAGE_FORMATS}
              id="image"
              name="image"
              type="file"
            />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="blurb">
              Blurb
              <OptionalNote>(Optional)</OptionalNote>
            </Label>
            <TextArea id="blurb" name="blurb" onChange={handleChange} />
          </FieldWrapper>
          <Footer>
            <Button
              disabled={isSubmitting}
              onClick={() => resetForm()}
              type="reset"
              variant="secondary"
            >
              Clear
            </Button>
            <Button
              disabled={isSubmitting}
              onClick={() => {}}
              type="submit"
              variant="primary"
            >
              Save
            </Button>
          </Footer>
        </FormWrapper>
      )}
    </Formik>
  );
};
