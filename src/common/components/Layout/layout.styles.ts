import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "../../utils/mediaQueries";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ${mq.medium(css`
    display: grid;
    grid-template: "sidebar content"
    grid-template-columns: 1fr 3fr;
  `)}
`;

export const LayoutSidebar = styled.div`
  display: none;
  flex-direction: column;
  height: 100%;
  position: fixed;

  ${mq.medium(css`
    display: grid;
    grid-area: sidebar;
  `)}
`;

export const LayoutContent = styled.div`
  display: flex;
  height: 100%;
  overflow-y: auto;

  ${mq.medium(css`
    display: grid;
    padding: 64px;
    grid-area: content;
  `)}
`;
