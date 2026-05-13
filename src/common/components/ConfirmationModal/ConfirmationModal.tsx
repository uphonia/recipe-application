import { Button } from "../Button/Button";
import { Content, Footer } from "./confirmationModal.styles";
import { Modal } from "../Modal/Modal";

type Props = {
  closeModal: () => void;
  description: string;
  isOpen: boolean;
  onConfirm: () => void;
  onConfirmText: string;
  title?: string;
};

export const ConfirmationModal = ({
  closeModal,
  description,
  isOpen,
  onConfirm,
  onConfirmText,
  title,
}: Props) => (
  <Modal closeModal={closeModal} isOpen={isOpen} title={title}>
    <Content>
      <p>{description}</p>
      <Footer>
        <Button onClick={closeModal} variant="secondary">
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="primary">
          {onConfirmText}
        </Button>
      </Footer>
    </Content>
  </Modal>
);
