import type { Meta, StoryObj } from "@storybook/react-vite";

import { SelectField } from "./Select";

const meta = {
  component: SelectField,
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "sort-by",
    label: "Sort By",
    onChange: () => {},
    options: ["Breakfast", "Lunch", "Dinner"],
    value: "",
  },
};
