import type { Meta, StoryObj } from "@storybook/react";
import SubscribeComponent from "../components/Subscribe";

const meta = {
  title: "Vespi/Subscribe",
  component: SubscribeComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SubscribeComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Subscribe: Story = {};
