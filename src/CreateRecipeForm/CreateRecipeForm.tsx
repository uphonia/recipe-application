import React, { useState } from "react";

import { Formik } from "formik";

import {
  Wrapper,
  Field,
  Label,
  OptionalNote,
  Input,
  ListWrapper,
  ListInput,
  Divider,
  NewLineButton,
  Footer,
  FormButton,
  TextArea,
  FileInput,
} from "./createRecipeForm.styles";
import { initialValues } from "./createRecipeForm.types";
import {
  INGREDIENTS_INPUT_PLACEHOLDER,
  INSTRUCTIONS_INPUT_PLACEHOLDER,
} from "./createRecipeForm.consts";

export const CreateRecipeForm = () => {
  const [steps, setSteps] = useState<string[]>([]);
  const addNextStep = () => {
    setSteps((prevState) => [...prevState, ""]);
  };

  const [ingredients, setIngredients] = useState<string[]>([]);
  const addIngredient = () => {
    setIngredients((prevState) => [...prevState, ""]);
  };

  const initialStepAdd = !steps.length;
  const initialIngredientAdd = !ingredients.length;

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {({ handleChange, isSubmitting, resetForm }) => (
        <Wrapper>
          <Field>
            <Label>Name</Label>
            <Input />
          </Field>
          <Field>
            <Label>
              # of Servings<OptionalNote>{"(Optional)"}</OptionalNote>
            </Label>
            <Input />
          </Field>
          <Field column>
            <Label>
              Ingredients
              {initialIngredientAdd && (
                <NewLineButton onClick={addIngredient}>
                  Add Ingredient
                </NewLineButton>
              )}
            </Label>
            <ListWrapper>
              <ul>
                {ingredients.map((_, index) => (
                  <ListInput key={`ingredient_${index}`}>
                    <li>
                      <Input
                        onChange={handleChange}
                        placeholder={INGREDIENTS_INPUT_PLACEHOLDER}
                      />
                    </li>
                    {index === ingredients.length - 1 && (
                      <NewLineButton onClick={addIngredient}>
                        Next Ingredient
                      </NewLineButton>
                    )}
                  </ListInput>
                ))}
              </ul>
            </ListWrapper>
          </Field>
          <Field column>
            <Label>
              Steps{" "}
              {initialStepAdd && (
                <NewLineButton onClick={addNextStep}>Add Step</NewLineButton>
              )}
            </Label>
            <ListWrapper>
              <ol>
                {steps.map((_, index) => (
                  <ListInput key={`step_${index}`}>
                    <li>
                      <Input
                        onChange={handleChange}
                        placeholder={INSTRUCTIONS_INPUT_PLACEHOLDER}
                      />
                    </li>
                    {index === steps.length - 1 && (
                      <NewLineButton onClick={addNextStep}>
                        Next Step
                      </NewLineButton>
                    )}
                  </ListInput>
                ))}
              </ol>
            </ListWrapper>
          </Field>
          <Field>
            <Label>Image</Label>
            <FileInput
              accept="image/png, image/jpeg, image/pneg, image/jpg"
              id="image"
              name="image"
              type="file"
            />
          </Field>
          <Field>
            <Label>
              Blurb
              <OptionalNote>(Optional)</OptionalNote>
            </Label>
            <TextArea />
          </Field>
          <Footer>
            <FormButton isSubmit type="submit">
              Save
            </FormButton>
            <FormButton onClick={() => resetForm()} type="reset">
              Clear
            </FormButton>
          </Footer>
        </Wrapper>
      )}
    </Formik>
  );
};
