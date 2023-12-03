import type { Meta, StoryObj } from "@storybook/react";

import { AddToCart } from "./AddToCart";

const meta = {
  title: "Vespi/AddItemToCart",
  component: AddToCart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddToCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    quantity: 1,
    label: 1,
  },
};
