import { Formik, Form } from "formik";
import Editor from "react-simple-wysiwyg";

import {
  Main,
  FormWrapper,
  Label,
  OptionalNote,
  InputWrapper,
  Input,
  Footer,
  TextArea,
  FileInput,
  ButtonsWrapper,
  ErrorText,
} from "./createRecipeForm.styles";
import { initialValues, validation } from "./createRecipeForm.types";
import { FieldWrapper } from "../common/components/FieldWrapper/FieldWrapper";
import {
  IMAGE_FORMATS,
  INGREDIENTS_INPUT_PLACEHOLDER,
  INSTRUCTIONS_INPUT_PLACEHOLDER,
} from "./createRecipeForm.consts";
import { useCreateRecipeForm } from "./createRecipeForm.hooks";
import { Button } from "../common/components/Button/Button";

export const CreateRecipeForm = () => {
  const { handleSubmit } = useCreateRecipeForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}
      validateOnBlur={true}
      validateOnChange={false}
      validationSchema={validation}
    >
      {({
        errors,
        handleChange,
        isSubmitting,
        resetForm,
        setFieldValue,
        values,
      }) => (
        <Form>
          <Main>
            <FormWrapper>
              <FieldWrapper>
                <Label htmlFor="name">Name</Label>
                <InputWrapper>
                  <Input id="name" name="name" onChange={handleChange} />
                  <ErrorText>{errors.name ? errors.name : ""}</ErrorText>
                </InputWrapper>
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="servings"># of Servings</Label>
                <InputWrapper>
                  <Input
                    id="servings"
                    name="servings"
                    onChange={handleChange}
                  />
                  <ErrorText>
                    {errors.servings ? errors.servings : ""}
                  </ErrorText>
                </InputWrapper>
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="ingredients">Ingredients</Label>
                <InputWrapper>
                  <Editor
                    id="ingredients"
                    name="ingredients"
                    value={values.ingredients}
                    onChange={(e) =>
                      setFieldValue("ingredients", e.target.value)
                    }
                    placeholder={INGREDIENTS_INPUT_PLACEHOLDER}
                  />
                  <ErrorText>
                    {errors.ingredients ? errors.ingredients : ""}
                  </ErrorText>
                </InputWrapper>
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="instructions">Instructions</Label>
                <InputWrapper>
                  <Editor
                    id="instructions"
                    name="instructions"
                    value={values.instructions}
                    onChange={(e) =>
                      setFieldValue("instructions", e.target.value)
                    }
                    placeholder={INSTRUCTIONS_INPUT_PLACEHOLDER}
                  />
                  <ErrorText>
                    {errors.instructions ? errors.instructions : ""}
                  </ErrorText>
                </InputWrapper>
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="image">
                  Image
                  <OptionalNote>(Optional)</OptionalNote>
                </Label>
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
            </FormWrapper>
            <Footer>
              <ButtonsWrapper>
                <Button
                  disabled={isSubmitting}
                  onClick={() => resetForm()}
                  type="reset"
                  variant="secondary"
                >
                  Clear
                </Button>
                <Button
                  loading={isSubmitting}
                  size="medium"
                  type="submit"
                  variant="primary"
                >
                  Save
                </Button>
              </ButtonsWrapper>
            </Footer>
          </Main>
        </Form>
      )}
    </Formik>
  );
};
