import type { Meta, StoryObj } from "@storybook/react-vite";

import { FormLabel } from "./FormLabel";
import styled from "@emotion/styled";

const meta = {
  component: FormLabel,
} satisfies Meta<typeof FormLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper = styled.div`
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  height: 50px;
  padding: 8px;
`;

export const Primary: Story = {
  args: {
    label: "Label",
    name: "Label",
  },
  render: (args) => (
    <Wrapper>
      <FormLabel {...args} />
    </Wrapper>
  ),
};
