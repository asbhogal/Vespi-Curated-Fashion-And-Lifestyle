import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Vespi/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Add to bag",
  },
};

export const General: Story = {
  args: {
    label: "Learn more about us",
  },
};

export const Special: Story = {
  args: {
    label: "Follow us on the gram",
    icon: true,
  },
};
