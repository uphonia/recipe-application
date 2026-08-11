import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100%;
`;

export const RecipeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeList = styled.div<{ toggleView: "grid" | "list" }>`
  align-content: start;
  display: flex;
  flex-direction: column;
  padding: 24px 42px;

  ${({ toggleView }) =>
    toggleView === "grid" &&
    css`
      column-gap: 10px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 20px;
    `}
`;

export const ToggleViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-left: auto;
  padding-right: 42px;
  padding-top: 24px;
`;

export const ToggleViewDivider = styled.div`
  border-left: 2px solid black;
`;

export const Toggle = styled.button<{ active: boolean }>`
  align-items: center;
  background-color: ${({ active }) => (active ? "white" : "transparent")};
  border-radius: 8px;
  display: flex;
  gap: 8px;
  padding: 8px 12px;

  &:hover {
    background-color: white;
  }
`;
