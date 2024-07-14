import type { Meta, StoryObj } from "@storybook/react";

import { AddToCartForm } from "../components/AddToCartForm";

const meta = {
  title: "Vespi/AddItemToCart",
  component: AddToCartForm,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: true },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddToCartForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    quantity: "1",
    label: 1,
  },
};

export const OrderedItem: Story = {
  args: {
    size: "medium",
    label: 1,
    quantity: "1",
  },
};
