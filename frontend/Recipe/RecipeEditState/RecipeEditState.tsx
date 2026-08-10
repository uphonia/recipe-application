import EmptyImageStateIcon from "@mui/icons-material/Restaurant";
import Editor from "react-simple-wysiwyg";
import { Form, Formik } from "formik";
import { Dispatch, SetStateAction } from "react";

import { SwitchSelector } from "../../common/components/SwitchSelector/SwitchSelector";
import { Typography } from "../../common/components/Typography/Typography";
import { Recipe } from "../../common/models/Recipe";

import { SWITCHES } from "../recipe.consts";
import {
  Wrapper,
  Card,
  Section,
  Header,
  ImageContainer,
  Image,
  EmptyImage,
} from "../recipe.styles";
import { useRecipeEditState } from "./recipeEditState.hooks";
import { getFormValue } from "./recipeEditState.utils";
import {
  ButtonsContainer,
  SaveButton,
  Input,
  InputWrapper,
  ErrorText,
} from "./recipeEditState.styles";
import { validation } from "./recipeEditState.consts";
import { isEmptyHtml } from "../../common/utils/isEmptyHtml";
import { Button } from "../../common/components/Button/Button";
import { ConfirmationModal } from "../../common/components/ConfirmationModal/ConfirmationModal";

type Props = {
  activeTab: string;
  handleExitEditState: () => void;
  recipe: Recipe;
  refreshRecipe: (recipe: Recipe) => void;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

export const RecipeEditState = ({
  activeTab,
  handleExitEditState,
  recipe,
  refreshRecipe,
  setActiveTab,
}: Props) => {
  const {
    closeModal,
    handleDeleteConfirm,
    handleDeleteOnClick,
    handleSave,
    initialValues,
    isModalOpen,
  } = useRecipeEditState(handleExitEditState, recipe, refreshRecipe);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSave(values)}
        validationSchema={validation}
      >
        {({
          errors,
          handleChange,
          isSubmitting,
          isValid,
          setFieldValue,
          values,
        }) => (
          <Form>
            <Wrapper>
              <Card>
                <Section>
                  <Header>
                    <Input
                      id="name"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                    />
                    <InputWrapper>
                      <Typography variant="body2">Servings:</Typography>
                      <Input
                        id="servings"
                        name="servings"
                        onChange={handleChange}
                        type="number"
                        value={values.servings}
                      />
                    </InputWrapper>
                  </Header>
                  {/* TODO - allow edit of uploaded images */}
                  <ImageContainer>
                    {recipe.files?.length ? (
                      // TODO - carousel of images
                      <Image src={recipe.files[0].fileUrl} />
                    ) : (
                      <EmptyImage>
                        <EmptyImageStateIcon />
                        <p>No image provided</p>
                      </EmptyImage>
                    )}
                  </ImageContainer>
                  <ButtonsContainer>
                    <Button onClick={handleExitEditState} variant="secondary">
                      <Typography variant="body2">Cancel</Typography>
                    </Button>
                    <Button onClick={handleDeleteOnClick} variant="red">
                      <Typography variant="body2">Delete</Typography>
                    </Button>
                  </ButtonsContainer>
                </Section>
                <Section>
                  <SwitchSelector
                    activeSwitch={activeTab}
                    onSelect={setActiveTab}
                    switches={Object.values(SWITCHES)}
                  />
                  <Editor
                    id={activeTab.toLocaleLowerCase()}
                    name={activeTab.toLocaleLowerCase()}
                    value={getFormValue(values, activeTab)}
                    onChange={(e) => {
                      const text = e.target.value;
                      setFieldValue(
                        activeTab.toLocaleLowerCase(),
                        isEmptyHtml(text) ? "" : text,
                      );
                    }}
                  />
                  {!!Object.keys(errors).length &&
                    Object.values(errors).map((error) => (
                      <ErrorText>{error}</ErrorText>
                    ))}
                  <SaveButton
                    disabled={!isValid}
                    loading={isSubmitting}
                    type="submit"
                    variant="primary"
                  >
                    <Typography variant="body2">Save</Typography>
                  </SaveButton>
                </Section>
              </Card>
            </Wrapper>
          </Form>
        )}
      </Formik>
      <ConfirmationModal
        closeModal={closeModal}
        description="Do you want to delete this recipe?"
        isOpen={isModalOpen}
        onConfirm={handleDeleteConfirm}
        onConfirmText="Delete"
        title="Delete"
      />
    </>
  );
};
