import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Formik } from "formik";

import {
  Wrapper,
  Header,
  Form,
  Container,
  Section,
  Label,
  ButtonContainer,
  AddButton,
  FormButton,
} from "./recipeAdd.styles";
import { categories } from "../consts/categories.consts";

export const RecipeAdd = () => {
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
                <AddButton>Add Ingredient</AddButton>
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
      </Container>
    </Wrapper>
  );
};
