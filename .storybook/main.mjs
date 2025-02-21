import path from "node:path";

const getAbsolutePath = (name) => {
  const root = new URL(import.meta.resolve(path.join(name, "package.json")));
  return path.dirname(root.pathname);
};

/**
 * @type {import('@storybook/react-webpack5').StorybookConfig}
 */
const config = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    "@storybook/addon-webpack5-compiler-swc",
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {},
  },
  swc: () => ({
    sourceMaps: false,
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
};

export default config;
