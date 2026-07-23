import EmptyImageStateIcon from "@mui/icons-material/Restaurant";
import RswEditor from "react-simple-wysiwyg";
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
import { SaveButton, Input } from "./recipeEditState.styles";

type Props = {
  activeTab: string;
  handleSaveOnClick: () => void;
  recipe: Recipe;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

export const RecipeEditState = ({
  activeTab,
  handleSaveOnClick,
  recipe,
  setActiveTab,
}: Props) => {
  const { initialValues } = useRecipeEditState(recipe);

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {({ handleChange, isSubmitting, setFieldValue, values }) => (
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
                  <Typography variant="body2">
                    Servings:{" "}
                    <Input
                      id="servings"
                      name="servings"
                      onChange={handleChange}
                      value={values.servings}
                    />
                  </Typography>
                </Header>
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
              </Section>
              <Section>
                <SwitchSelector
                  activeSwitch={activeTab}
                  onSelect={setActiveTab}
                  switches={Object.values(SWITCHES)}
                />
                <RswEditor
                  id={activeTab.toLocaleLowerCase()}
                  name={activeTab.toLocaleLowerCase()}
                  value={getFormValue(values, activeTab)}
                  onChange={(e) =>
                    setFieldValue(activeTab.toLocaleLowerCase(), e.target.value)
                  }
                />
                <SaveButton onClick={handleSaveOnClick} variant="primary">
                  <Typography variant="body2">Save</Typography>
                </SaveButton>
              </Section>
            </Card>
          </Wrapper>
        </Form>
      )}
    </Formik>
  );
};
