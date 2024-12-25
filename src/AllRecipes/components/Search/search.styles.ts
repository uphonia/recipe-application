import styled from "@emotion/styled";
import { mq } from "../../../common/utils/mediaQueries";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${mq.medium(css`
    border-radius: 8px;
  `)}
`;

export const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  width: 100%;
`;

export const SearchInput = styled.input`
  background-color: white;
  padding: 8px;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 8px;
  padding: 8px 12px;
  width: auto;
`;
