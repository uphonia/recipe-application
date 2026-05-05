import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: white;
  border-right: 1px solid #a8a2a2;
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

export const Navigation = styled.div`
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  padding: 12px 24px;

  &:hover {
    background-color: #c9c5c5;
    cursor: pointer;
  }
`;

export const SubNavigation = styled.div`
  background-color: #f4f4f4;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  justify-content: center;
  margin-left: auto;
  padding: 12px 24px;
  width: 40%;

  &:hover {
    background-color: #c9c5c5;
    cursor: pointer;
  }
`;
