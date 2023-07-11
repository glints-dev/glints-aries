module.exports = {
  stories: ['../src/stories/Introduction.stories.mdx', '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)', './*.stories.mdx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],
  features: {
    storyStoreV7: true
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  }
};