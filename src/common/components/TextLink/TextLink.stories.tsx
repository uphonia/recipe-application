import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextLink } from "./TextLink";

const meta = {
  component: TextLink,
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Underlined text link",
    href: "",
  },
};
