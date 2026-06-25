import { LinkComponent } from "./textLink.styles";

type Props = {
  href: string;
  text: string;
};

export const TextLink = ({ href, text }: Props) => (
  <LinkComponent href={href}>{text}</LinkComponent>
);
