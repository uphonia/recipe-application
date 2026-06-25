import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 2fr 0.75fr;
  height: 100%;
`;

export const RecipeList = styled.div`
  align-content: start;
  column-gap: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 24px 42px;
  row-gap: 20px;
`;
