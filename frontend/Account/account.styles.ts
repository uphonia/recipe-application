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

export const FieldWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  width: 100%;
`;

export const ErrorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
