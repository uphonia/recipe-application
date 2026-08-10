import styled from "@emotion/styled";

import { Button } from "../../common/components/Button/Button";
import { Typography } from "../../common/components/Typography/Typography";

export const SaveButton = styled(Button)`
  bottom: 0;
  position: absolute;
  right: 0;
`;

export const ButtonsContainer = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 0;
  position: absolute;
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid black;
  height: 30px;
  padding: 0 8px;
`;

export const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const ErrorText = styled(Typography)`
  color: red;
`;
