import React from "react";
import { Formik } from "formik";

import {
  Overlay,
  Modal,
  Header,
  InputWrapper,
  ButtonContainer,
} from "../IngredientAddModal/ingredientAddModal.styles";
import { FormButton } from "../../components/Button/button.styles";

type Props = {
  setModalClose: (value: boolean) => void;
};

export const IngredientAddModal = ({ setModalClose }: Props) => {
  return (
    <Overlay>
      <Modal>
        <Header>Add Ingredient</Header>
        <Formik initialValues={{}} onSubmit={() => {}}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <InputWrapper>
                <p>Amount</p>
                <input />
              </InputWrapper>
              <InputWrapper>
                <p>Unit</p>
                <input />
              </InputWrapper>
              <InputWrapper>
                <p>Description</p>
                <input />
              </InputWrapper>
              <ButtonContainer>
                <FormButton onClick={() => setModalClose(false)}>
                  Cancel
                </FormButton>
                <FormButton type="submit">Add</FormButton>
              </ButtonContainer>
            </form>
          )}
        </Formik>
      </Modal>
    </Overlay>
  );
};
