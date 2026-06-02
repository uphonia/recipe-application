import { ReactNode } from "react";
import { LinkComponent } from "./textLink.styles";

type Props = {
  children: ReactNode;
  href: string;
};

export const TextLink = ({ children, href }: Props) => (
  <LinkComponent href={href}>{children}</LinkComponent>
);
