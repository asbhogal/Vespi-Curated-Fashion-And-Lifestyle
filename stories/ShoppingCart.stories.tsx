import type { Meta, StoryObj } from "@storybook/react";

import ShoppingCart, { ShoppingCartProps } from "@/components/ShoppingCart";

const meta = {
  title: "Vespi/ShoppingBag",
  component: ShoppingCart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShoppingCart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ShoppingBag: Story = (args: ShoppingCartProps) => (
  <ShoppingCart {...args} />
);

ShoppingBag.args = {
  defaultLayout: true,
};
