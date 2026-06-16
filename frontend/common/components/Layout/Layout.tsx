import { ReactNode } from "react";
import { MainWrapper, LayoutSidebar, LayoutContent } from "./layout.styles";

type Props = {
  content: ReactNode;
  sidebar?: ReactNode;
};

export const Layout = ({ content, sidebar }: Props) => {
  return (
    <MainWrapper showSidebar={!!sidebar}>
      <LayoutSidebar>{sidebar}</LayoutSidebar>
      <LayoutContent>{content}</LayoutContent>
    </MainWrapper>
  );
};
