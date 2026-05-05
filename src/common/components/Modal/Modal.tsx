import { Modal as ModalBase } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { ReactNode } from "react";

import { Header, Wrapper, Content, CloseButton } from "./modal.styles";

type Props = {
  children: ReactNode;
  closeModal: () => void;
  isOpen: boolean;
  title?: string;
};

export const Modal = ({ children, closeModal, isOpen, title }: Props) => (
  <ModalBase onClose={closeModal} open={isOpen}>
    <Wrapper>
      <Header>
        {title}
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
      </Header>
      <Content>{children}</Content>
    </Wrapper>
  </ModalBase>
);
