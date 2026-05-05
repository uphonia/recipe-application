import styled from "@emotion/styled";

import { BUTTON_SIZE, BUTTON_TYPE } from "./button.type";
import { css } from "@emotion/react";
import {
  getBackgroundColor,
  getFontSize,
  getHeight,
  getWidth,
  getPadding,
  getHoverBackgroundColor,
  getBorderColor,
} from "./button.utils";

type ButtonProps = {
  buttonType: BUTTON_TYPE;
  fluid?: boolean;
  size: BUTTON_SIZE;
};

export const FormButton = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${({ buttonType }) => getBackgroundColor(buttonType)};
  border: 1px solid ${({ buttonType }) => getBorderColor(buttonType)};
  border-radius: 8px;
  display: flex;
  font-size: ${({ size }) => getFontSize(size)};
  height: ${({ size }) => getHeight(size)};
  justify-content: center;
  width: ${({ size }) => getWidth(size)};
  padding: ${({ size }) => getPadding(size)};

  ${({ fluid }) =>
    fluid &&
    css`
      width: 100%;
    `}

  &:hover {
    background-color: ${({ buttonType }) =>
      getHoverBackgroundColor(buttonType)};
  }
`;
