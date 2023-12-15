import { initialize } from "msw-storybook-addon";
import type { Preview } from "@storybook/react";
import "../app/globals.css";

initialize({
  onUnhandledRequest: "bypass",
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  //loaders: [mswLoader],
};

export default preview;
