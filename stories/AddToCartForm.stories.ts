import type { Meta, StoryObj } from "@storybook/react";

import { AddToCartForm } from "../components/AddToCartForm";
import { expect, userEvent, waitFor, within } from "@storybook/test";

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
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("spinbutton"), "5");
    const logSpy = jest.spyOn(console, "log");

    await step("Submit form", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });
    expect(logSpy).toHaveBeenCalledWith({ quantity: 5 });

    await step("Submit form", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });

    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};
