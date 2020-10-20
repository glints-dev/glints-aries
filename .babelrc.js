const isEs = process.env.BABEL_ENV === 'es';

module.exports = {
  presets: [
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
    [
      '@babel/preset-env',
      {
        modules: isEs ? false : 'commonjs',
        targets: {
          browsers: ['> 99.5%'],
        },
        loose: true,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
      },
    ],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
  ],
};
