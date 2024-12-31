import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "../../utils/mediaQueries";

export const MainWrapper = styled.div<{ noHeader?: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ${mq.medium(css`
    display: grid;
    grid-template: "sidebar header" "sidebar content";
    grid-template-columns: 15% 85%;
  `)}

  ${({ noHeader }) =>
    noHeader &&
    mq.medium(css`
      grid-template: "sidebar content";
      grid-template-columns: 15% 85%;
    `)}
`;

export const LayoutHeader = styled.div`
  grid-area: header;
`;

export const LayoutSidebar = styled.div`
  display: none;
  flex-direction: column;
  grid-area: sidebar;
  height: 100%;

  ${mq.medium(css`
    display: flex;
  `)}
`;

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  grid-area: content;
  height: 100%;
  overflow-y: auto;

  ${mq.medium(css`
    padding: 64px;
  `)}
`;
