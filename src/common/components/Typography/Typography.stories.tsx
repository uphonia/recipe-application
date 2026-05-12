import type { Meta, StoryObj } from "@storybook/react-vite";

import { Typography } from "./Typography";

const meta = {
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Hello this is a typography",
    variant: "h1",
  },
};
