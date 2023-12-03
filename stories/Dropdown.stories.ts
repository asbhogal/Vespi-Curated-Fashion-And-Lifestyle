import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./Dropdown";

const meta = {
  title: "Vespi/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    quantity: 1,
    label: 1,
  },
};
