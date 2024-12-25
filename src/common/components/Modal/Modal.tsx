import React, { ReactNode } from "react";
import ReactModal from "react-modal";
import { Wrapper, CloseButton, Overlay } from "./modal.styles";

type Props = {
  children?: ReactNode;
  closeModal: () => void;
  isModalOpen: boolean;
};

export const Modal = ({ children, closeModal, isModalOpen }: Props) => {
  if (!isModalOpen) return;

  return (
    <ReactModal isOpen={isModalOpen}>
      <Wrapper>
        <CloseButton onClick={closeModal} src="/assets/icons/close.png" />
        HI
        {children}
      </Wrapper>
    </ReactModal>
  );
};
