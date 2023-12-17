import type { Meta, StoryObj } from "@storybook/react";
import PressQuotesComponent from "../components/PressQuotes";

const meta = {
  title: "Vespi/PressQuotes",
  component: PressQuotesComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PressQuotesComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PressQuotes: Story = {};
