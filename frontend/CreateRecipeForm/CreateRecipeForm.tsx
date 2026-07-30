import { Formik } from "formik";
import Editor from "react-simple-wysiwyg";

import {
  Main,
  FormWrapper,
  OptionalNote,
  InputWrapper,
  Input,
  Footer,
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
import { FormLabel } from "../common/components/FormLabel/FormLabel";
import { isEmptyHtml } from "../common/utils/isEmptyHtml";

export const CreateRecipeForm = () => {
  const { handleFileChange, handleSubmit } = useCreateRecipeForm();

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
        <Main>
          <FormWrapper>
            <FieldWrapper>
              <FormLabel label="Name" name="name" />
              <InputWrapper>
                <Input
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
                {!!errors.name && <ErrorText>{errors.name}</ErrorText>}
              </InputWrapper>
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel label="# of Servings" name="servings" />
              <InputWrapper>
                <Input
                  id="servings"
                  name="servings"
                  onChange={handleChange}
                  type="number"
                  value={values.servings}
                />
                {!!errors.servings && <ErrorText>{errors.servings}</ErrorText>}
              </InputWrapper>
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel label="Ingredients" name="ingredients" />
              <InputWrapper>
                <Editor
                  id="ingredients"
                  name="ingredients"
                  value={values.ingredients}
                  onChange={(e) => {
                    const text = e.target.value;
                    setFieldValue("ingredients", isEmptyHtml(text) ? "" : text);
                  }}
                  placeholder={INGREDIENTS_INPUT_PLACEHOLDER}
                />
                {!!errors.ingredients && (
                  <ErrorText>{errors.ingredients}</ErrorText>
                )}
              </InputWrapper>
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel label="Instructions" name="instructions" />
              <InputWrapper>
                <Editor
                  id="instructions"
                  name="instructions"
                  value={values.instructions}
                  onChange={(e) => {
                    const text = e.target.value;
                    setFieldValue(
                      "instructions",
                      isEmptyHtml(text) ? "" : text,
                    );
                  }}
                  placeholder={INSTRUCTIONS_INPUT_PLACEHOLDER}
                />
                {!!errors.instructions && (
                  <ErrorText>{errors.instructions}</ErrorText>
                )}
              </InputWrapper>
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel label="Image" name="image">
                <OptionalNote>(Optional)</OptionalNote>
              </FormLabel>
              <FileInput
                accept={IMAGE_FORMATS}
                id="image"
                multiple={false}
                name="image"
                onChange={handleFileChange}
                type="file"
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel label="Blurb" name="blurb">
                <OptionalNote>(Optional)</OptionalNote>
              </FormLabel>
              <Editor
                id="blurb"
                name="blurb"
                value={values.blurb}
                onChange={(e) => {
                  const text = e.target.value;
                  setFieldValue("blurb", isEmptyHtml(text) ? "" : text);
                }}
              />
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
      )}
    </Formik>
  );
};
