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
    "@storybook/addon-styling-webpack",
    {
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve("postcss-loader"),
                options: {
                  implementation: require.resolve("postcss"),
                },
              },
            ],
          },
        ],
      },
    },
  ],
  async webpackFinal(config, { configType }) {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@/lib": path.resolve(__dirname, "../lib"),
        "@/components": path.resolve(__dirname, "../components"),
      };
    }
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
