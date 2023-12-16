import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/Header";

const meta = {
  title: "Vespi/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    status: "some status",
    onLogin: () => {},
    onLogout: () => {},
    onCreateAccount: () => {},
    defaultLayout: true,
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    status: "Log Out",
  },
};

export const LoggedOut: Story = {};
