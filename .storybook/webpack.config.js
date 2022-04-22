const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = ({ config }) => {
  const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
  fileLoaderRule.exclude = /\.svg$/;

  config.module.rules.push({
    test: /\.svg$/,
    enforce: 'pre',
    loader: require.resolve('@svgr/webpack'),
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    '@emotion/core': toPath('node_modules/@emotion/react'),
    '@emotion/styled': toPath('node_modules/@emotion/styled'),
    '@svgr/webpack': toPath('node_modules/@svgr'),
    '@/stories': path.resolve(__dirname, '../stories'),
    '@/public': path.resolve(__dirname, '../public'),
    '@/.storybook': path.resolve(__dirname, '.'),
    '@/pages': path.resolve(__dirname, '../pages'),
    '@/styles': path.resolve(__dirname, '../styles'),
    '@/components': path.resolve(__dirname, '../components'),
  };

  return config;
};
