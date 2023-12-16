import type { Meta, StoryObj } from "@storybook/react";
import SearchComponent from "../components/Search";

const meta = {
  title: "Vespi/Search",
  component: SearchComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Search: Story = {};
