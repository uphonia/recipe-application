import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Switch = styled.div<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? "black" : "gray")};
  display: flex;
  padding: 8px;
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
  text-underline-offset: 2px;
`;
