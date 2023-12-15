import type { Meta, StoryObj } from "@storybook/react";
import { mswLoader } from "msw-storybook-addon";
import IGFeed from "../components/IGFeed";
import { HttpResponse, http } from "msw";

const meta = {
  title: "Vespi/IGFeed",
  component: IGFeed,
  loaders: [mswLoader],
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

export const IGFeedSlider: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://vespi-fashion.com/api/IG*", () =>
          HttpResponse.json()
        ),
      ],
    },
  },
};
