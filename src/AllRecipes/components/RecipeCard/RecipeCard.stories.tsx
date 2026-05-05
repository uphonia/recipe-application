import type { Meta, StoryObj } from '@storybook/react-vite';

import { RecipeCard } from './RecipeCard';

const meta = {
  component: RecipeCard,
} satisfies Meta<typeof RecipeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    createdDate: '3/25/26',
    isFavorited: true,
    name: 'Croque Monseiur',
    onClick: () => {},
    onDelete: () => {},
    onFavorite: () => {}
  },
};