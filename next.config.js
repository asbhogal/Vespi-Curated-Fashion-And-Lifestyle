/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: [
      "app",
      "utils",
      "components",
      "stories",
      "lib",
      ".storybook",
      ".husky",
      "public",
    ],
  },
};

module.exports = nextConfig;
