import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  async webpackFinal(config, { configType }) {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@/lib": path.resolve(__dirname, "../lib"),
        "@/components": path.resolve(__dirname, "../components"),
        "@/stories": path.resolve(__dirname, "../stories"),
        "@/types": path.resolve(__dirname, "../types"),
        "@/utils": path.resolve(__dirname, "../utils"),
      };
    }
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
