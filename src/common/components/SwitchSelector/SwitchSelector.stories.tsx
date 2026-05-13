import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { SwitchSelector } from "./SwitchSelector";

const meta = {
  component: SwitchSelector,
} satisfies Meta<typeof SwitchSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

function SwitchSelectorWithState({
  initialActive,
  switches,
}: {
  initialActive: string | null;
  switches: string[];
}) {
  const [activeSwitch, setActiveSwitch] = useState<string | null>(
    initialActive,
  );

  return (
    <SwitchSelector
      activeSwitch={activeSwitch}
      onSelect={setActiveSwitch}
      switches={switches}
    />
  );
}

export const Primary: Story = {
  render: (args) => (
    <SwitchSelectorWithState
      initialActive={args.activeSwitch}
      switches={args.switches}
    />
  ),
  args: {
    activeSwitch: null,
    onSelect: () => {},
    switches: ["Ingredients", "Steps"],
  },
};
