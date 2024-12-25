import styled from "@emotion/styled";

type ButtonProps = {
  isCancel?: boolean;
  isConfirm?: boolean;
  isLarge?: boolean;
};

export const FormButton = styled.button<ButtonProps>`
  border-radius: 8px;
  display: flex;
  font-size: 12px;
  height: 30px;
  justify-content: center;
  max-width: 90px;
  padding: 8px;
  width: 100%;
`;
