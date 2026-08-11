import type { Meta, StoryObj } from "@storybook/react-vite";

import { RecipeRow } from "./RecipeRow";

const meta = {
  component: RecipeRow,
} satisfies Meta<typeof RecipeRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    createdByText: "You",
    createdDate: "3/25/26",
    isFavorited: true,
    name: "Croque Monseiur",
    onClick: () => {},
    onDelete: () => {},
    onFavorite: () => {},
  },
};
