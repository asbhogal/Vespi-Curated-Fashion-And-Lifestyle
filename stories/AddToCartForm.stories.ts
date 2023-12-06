import type { Meta, StoryObj } from "@storybook/react";

import { AddToCartForm } from "../components/AddToCartForm";

const meta = {
  title: "Vespi/AddItemToCart",
  component: AddToCartForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddToCartForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    quantity: 1,
    label: 1,
  },
};
