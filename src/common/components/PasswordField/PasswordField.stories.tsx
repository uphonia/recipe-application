import type { Meta, StoryObj } from "@storybook/react-vite";

import { PasswordField } from "./PasswordField";

const meta = {
  component: PasswordField,
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "password",
    name: "password",
    onChange: () => {},
  },
};
