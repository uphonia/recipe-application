import type { Meta, StoryObj } from "@storybook/react-vite";

import { SwitchSelector } from "./SwitchSelector";

const meta = {
  component: SwitchSelector,
} satisfies Meta<typeof SwitchSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    switches: ["Ingredients", "Steps"],
  },
};
