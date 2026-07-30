import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { BUTTON_SIZE, BUTTON_VARIANT } from "./button.type";
import {
  getBackgroundColor,
  getFontSize,
  getHeight,
  getHoverBackgroundColor,
} from "./button.utils";

type ButtonProps = {
  variant: BUTTON_VARIANT;
  fluid?: boolean;
  size: BUTTON_SIZE;
};

export const FormButton = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${({ variant }) => getBackgroundColor(variant)};
  border-radius: 8px;
  display: flex;
  font-size: ${({ size }) => getFontSize(size)};
  gap: 8px;
  height: ${({ size }) => getHeight(size)};
  justify-content: center;
  padding: 12px 24px;
  width: auto;

  ${({ fluid }) =>
    fluid &&
    css`
      width: 100%;
    `}

  &:hover {
    background-color: ${({ variant }) => getHoverBackgroundColor(variant)};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
