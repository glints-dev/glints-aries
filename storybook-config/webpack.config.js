const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = async ({ config }) => {
  // Add support for loading TypeScript files.
  config.module.rules.push({
    test: /\.tsx?$/,
    use: ['babel-loader'],
    include: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../stories'),
    ],
  });

  config.resolve.extensions.push('.ts');
  config.resolve.extensions.push('.tsx');

  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  return config;
};
