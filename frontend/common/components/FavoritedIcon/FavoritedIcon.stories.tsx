import styled from "@emotion/styled";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { FavoritedIcon } from "./FavoritedIcon";

const meta = {
  component: FavoritedIcon,
} satisfies Meta<typeof FavoritedIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper = styled.div`
  align-items: center;
  background-color: black;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  height: 50px;
  padding: 8px;
  width: 50px;
`;

export const Primary: Story = {
  args: {
    isFavorite: true,
    onClick: () => {},
  },
  render: (args) => (
    <Wrapper>
      <FavoritedIcon {...args} />
    </Wrapper>
  ),
};
