import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  staticDirs: ['../public'],

  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/components': path.resolve(__dirname, '../components'),
        '@/lib': path.resolve(__dirname, '../lib'),
        '@/app': path.resolve(__dirname, '../app'),
      };
    }
    return config;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
