import type { Meta, StoryObj } from "@storybook/react-vite";
import styled from "@emotion/styled";

import { Toast } from "./Toast";
import { useAlertProviderContext } from "../../hooks/AlertProvider/alertProvider.hooks";

const meta = {
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const { addErrorAlert, addSuccessAlert } = useAlertProviderContext();

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
  render: () => (
    <Wrapper>
      <button
        onClick={() => {
          addErrorAlert("This is an error");
          addSuccessAlert("This is a success");
        }}
      >
        Click Me
      </button>
      <Toast />
    </Wrapper>
  ),
};
