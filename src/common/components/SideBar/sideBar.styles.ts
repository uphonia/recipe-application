import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #574b40;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  height: 150px;
  width: 150px;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  width: 100%;
`;

type NavigationProps = {
  selected?: boolean;
};

export const Navigation = styled.div<NavigationProps>`
  background-color: #d6a577;
  color: inherit;
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  text-decoration: none;

  &:hover {
    background-color: #96887a;
    cursor: pointer;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #96887a;
      text-decoration: underline;
      text-underline-offset: 2px;
    `}
`;

export const SubNavigation = styled(Navigation)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  margin-left: auto;
  width: 60%;
`;
