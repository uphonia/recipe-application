import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #218131;
  border-right: 2px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 50px;
`;

export const Image = styled.img`
  height: 150px;
  width: 150px;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const Navigation = styled.div`
  background-color: #ebf143;
  display: flex;
  justify-content: center;
  padding: 12px 24px;
`;
