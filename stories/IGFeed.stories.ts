import type { Meta, StoryObj } from "@storybook/react";
import IGFeed from "../components/IGFeed";

const meta = {
  title: "Vespi/IGFeed",
  component: IGFeed,
  parameters: {
    layout: "centered",
    docs: {
      source: { type: "code" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IGFeed>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IGFeedSlider: Story = {};
