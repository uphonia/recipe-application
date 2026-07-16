import { css } from "@emotion/react";

export const toastOverrideStyles = css`
  .Toastify__toast-theme--light.Toastify__toast--success {
    background-color: #196326;
    color: white;
    min-height: 52px;
  }

  .Toastify__toast-theme--light.Toastify__toast--error {
    background-color: #6b0505;
    color: white;
    min-height: 52px;
  }

  .Toastify__close-button--light.Toastify__close-button {
    color: white;
    opacity: 1;
  }
`;
