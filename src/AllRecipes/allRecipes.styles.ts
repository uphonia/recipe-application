import styled from "@emotion/styled";
import { mq } from "../common/utils/mediaQueries";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 2fr 0.75fr;
  height: 100%;
`;

export const RecipeList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  padding: 24px 42px;
`;
