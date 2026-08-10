import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Button } from "../Button/Button";

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
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: #d6a577;
  color: inherit;
  display: flex;
  justify-content: center;
  margin-left: auto;
  padding: 12px 24px;
  text-decoration: none;
  transition: width 0.5s;
  width: 85%;

  &:hover {
    background-color: #96887a;
    cursor: pointer;
    width: 95%;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #96887a;
      text-decoration: underline;
      text-underline-offset: 2px;
      width: 95%;
    `}
`;

export const SubNavigation = styled(Navigation)`
  width: 70%;

  &:hover {
    width: 75%;
  }

  ${({ selected }) =>
    selected &&
    css`
      width: 75%;
    `}
`;

export const LogOutButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogOutButton = styled(Button)`
  align-items: center;
  bottom: 16px;
  display: flex;
  gap: 8px;
  position: absolute;
`;
