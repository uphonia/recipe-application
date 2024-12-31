import styled from "@emotion/styled";
import { mq } from "../common/utils/mediaQueries";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  padding: 16px;
`;

export const RecipeList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;

  ${mq.medium(css`
    padding: 0px;
  `)}
`;
