import styled from "@emotion/styled";
import { Form } from "formik";

import { Typography } from "../common/components/Typography/Typography";

export const Title = styled.h1``;

export const Main = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  position: relative;
  width: 100%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  padding: 36px 48px;
  width: 80%;
`;

export const OptionalNote = styled.span`
  color: gray;
`;

export const Input = styled.input`
  border: 1px solid black;
  height: 30px;
  padding: 0 8px;
`;

export const Divider = styled.div`
  border-top: 1px solid black;
`;

export const FileInput = styled.input`
  width: 100%;
`;

export const Footer = styled.div`
  background-color: #d6a577;
  border-top: 2px solid #574b40;
  bottom: 0;
  padding: 16px;
  position: sticky;
  width: 100%;
  z-index: 1;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const ErrorText = styled(Typography)`
  color: red;
`;
