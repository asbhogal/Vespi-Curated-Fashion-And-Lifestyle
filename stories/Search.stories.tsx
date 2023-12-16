import type { Meta, StoryObj } from "@storybook/react";
import SearchComponent from "../components/Search";
import { SearchProps } from "@/utils/types";

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

export const Search: Story = (args: SearchProps) => (
  <SearchComponent {...args} />
);

Search.args = {
  buttonClassName: "placeholder-buttonclass",
  ariaLabelledBy: "placeholder-aria-labelledby",
  spanID: "placeholder-span-id",
};
