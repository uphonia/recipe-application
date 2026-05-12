import styled from "@emotion/styled";

export const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  padding: 4px;
`;

export const Switch = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? "#aabbbf" : "transparent")};
  border-radius: 4px;
  color: black;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 4px 0;
  text-underline-offset: 2px;
  transition: transform 1s ease-out;
`;
