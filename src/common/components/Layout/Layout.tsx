import React from "react";

import { ReactNode } from "react";
import {
  MainWrapper,
  LayoutSidebar,
  LayoutContent,
  LayoutHeader,
} from "./layout.styles";

type Props = {
  content: ReactNode;
  header?: ReactNode;
  sidebar?: ReactNode;
};

export const Layout = ({ content, header, sidebar }: Props) => {
  return (
    <MainWrapper>
      <LayoutHeader>{header}</LayoutHeader>
      <LayoutSidebar>{sidebar}</LayoutSidebar>
      <LayoutContent>{content}</LayoutContent>
    </MainWrapper>
  );
};
