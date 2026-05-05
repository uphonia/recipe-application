import React from "react";

import { Button } from "../Button/Button";
import { Content, Footer } from "./confirmationModal.styles";
import { Modal } from "../Modal/Modal";

type Props = {
  closeModal: () => void;
  description: string;
  isOpen: boolean;
  title?: string;
};

export const ConfirmationModal = ({
  closeModal,
  description,
  isOpen,
  title,
}: Props) => (
  <Modal closeModal={closeModal} isOpen={isOpen} title={title}>
    <Content>
      <p>{description}</p>
      <Footer>
        <Button buttonType="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button buttonType="primary" onClick={() => {}}>
          Delete
        </Button>
      </Footer>
    </Content>
  </Modal>
);
