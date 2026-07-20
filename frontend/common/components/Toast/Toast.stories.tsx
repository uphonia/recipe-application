import type { Meta, StoryObj } from "@storybook/react-vite";
import styled from "@emotion/styled";

import { Toast } from "./Toast";
import { useAlertProviderContext } from "../../hooks/AlertProvider/alertProvider.hooks";
import { AlertProvider } from "../../hooks/AlertProvider/AlertProvider";

const meta = {
  component: Toast,
} satisfies Meta<typeof Toast>;

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

const Button = () => {
  const { addErrorAlert, addSuccessAlert } = useAlertProviderContext();

  return (
    <button
      onClick={() => {
        addErrorAlert("This is an error");
        addSuccessAlert("This is a success");
      }}
    >
      Click Me
    </button>
  );
};

export const Primary: Story = {
  render: () => (
    <AlertProvider>
      <Wrapper>
        <Button />
        <Toast />
      </Wrapper>
    </AlertProvider>
  ),
};
