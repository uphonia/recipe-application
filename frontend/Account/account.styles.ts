import styled from "@emotion/styled";
import CheckIconBase from "@mui/icons-material/Check";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

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
  gap: 24px;
  padding: 16px 32px;
  text-align: center;
  width: 30vw;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

export const RulesContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const RulesWrapper = styled.div`
  column-gap: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 4px;
`;

export const Rule = styled.li`
  align-items: center;
  display: flex;
  gap: 4px;
  list-style: none;
`;

export const CheckIcon = styled(CheckIconBase)`
  height: 12px;
  width: 12px;
`;

export const EmptyIcon = styled(CircleOutlinedIcon)`
  height: 12px;
  width: 12px;
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
