import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "../../utils/mediaQueries";

type MainWrapperProps = {
  showSidebar?: boolean;
};

export const MainWrapper = styled.div<MainWrapperProps>`
  background-color: #737e81;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ${({ showSidebar }) =>
    showSidebar
      ? mq.medium(css`
          display: grid;
          grid-template-areas: "sidebar content";
          grid-template-columns: 1fr minmax(0, 5fr);
          grid-template-rows: minmax(0, 1fr);
        `)
      : mq.medium(css`
          display: grid;
          grid-template-areas: "content content";
          grid-template-columns: 1fr;
          grid-template-rows: minmax(0, 1fr);
        `)}
`;

export const LayoutSidebar = styled.div`
  display: none;
  flex-direction: column;
  height: 100%;
  min-width: 0;

  ${mq.medium(css`
    display: flex;
    grid-area: sidebar;
    position: sticky;
    top: 0;
  `)}
`;

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  height: 100%;
  overflow-y: auto;
  min-width: 0;

  ${mq.medium(css`
    display: flex;
    grid-area: content;
  `)}
`;
