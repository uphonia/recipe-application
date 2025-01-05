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
} from "./createRecipeForm.styles";
import { initialValues } from "./createRecipeForm.types";

export const CreateRecipeForm = () => {
  const [instructions, setInstructions] = useState([""]);
  const addNewLine = () => {
    setInstructions((prevState) => [...prevState, ""]);
  };
  const [ingredients, setIngredients] = useState([""]);
  const addIngredient = () => {
    setIngredients((prevState) => [...prevState, ""]);
  };

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
            <Label>Ingredients</Label>
            <ListWrapper>
              <ul>
                {ingredients.map((_, index) => (
                  <ListInput>
                    <li>
                      <Input onChange={handleChange} />
                    </li>
                    {index === ingredients.length - 1 && (
                      <NewLineButton onClick={addIngredient}>
                        Add{" "}
                      </NewLineButton>
                    )}
                  </ListInput>
                ))}
              </ul>
            </ListWrapper>
          </Field>
          <Field column>
            <Label>Instructions</Label>
            <ListWrapper>
              <ol>
                {instructions.map((_, index) => (
                  <ListInput>
                    <li>
                      <Input onChange={handleChange} />
                    </li>
                    {index === instructions.length - 1 && (
                      <NewLineButton onClick={addNewLine}>Next</NewLineButton>
                    )}
                  </ListInput>
                ))}
              </ol>
            </ListWrapper>
          </Field>
          <Field>
            <Label>
              Blurb
              <OptionalNote>{"(Optional)"}</OptionalNote>
            </Label>
            <textarea />
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
