import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Formik } from "formik";

import { FormButton } from "../components/Button/button.styles";
import {
  Wrapper,
  Header,
  Form,
  Container,
  Section,
  Label,
  ButtonContainer,
} from "./recipeAdd.styles";
import { categories } from "../consts/categories.consts";
import { IngredientAddModal } from "./IngredientAddModal/IngredientAddModal";

export const RecipeAdd = () => {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Header>Add Recipe</Header>
        <Formik initialValues={{}} onSubmit={() => {}}>
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Section>
                <Label>Name</Label>
                <input />
              </Section>
              <Section>
                <Label>Category</Label>
                <Select options={categories} />
              </Section>
              <Section column>
                <Label>Ingredients</Label>
                <FormButton
                  isLarge
                  onClick={() => setOpenAddModal(true)}
                  type="button"
                >
                  Add Ingredient
                </FormButton>
              </Section>
              <Section column>
                <Label>Steps</Label>
                <input />
              </Section>
              <ButtonContainer>
                <Link to="/">
                  <FormButton>Cancel</FormButton>
                </Link>
                <FormButton>Submit</FormButton>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
        {openAddModal && <IngredientAddModal setModalClose={setOpenAddModal} />}
      </Container>
    </Wrapper>
  );
};
