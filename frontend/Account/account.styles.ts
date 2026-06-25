import styled from "@emotion/styled";

import { Typography } from "../common/components/Typography/Typography";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 36px;
  text-align: center;
  width: 30vw;
`;

export const Title = styled(Typography)`
  text-decoration: underline;
`;

export const ErrorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  &:empty {
    display: none;
  }
`;

export const ErrorText = styled.p`
  color: red;
`;

export const Footer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
