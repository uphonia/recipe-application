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
  noHeader?: boolean;
  sidebar?: ReactNode;
};

export const Layout = ({ content, header, noHeader, sidebar }: Props) => {
  return (
    <MainWrapper noHeader={noHeader}>
      <LayoutHeader>{header}</LayoutHeader>
      <LayoutSidebar>{sidebar}</LayoutSidebar>
      <LayoutContent>{content}</LayoutContent>
    </MainWrapper>
  );
};
