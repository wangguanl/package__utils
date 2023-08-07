const path = require('path'),
  { merge } = require('webpack-merge'),
  commonConfig = require('./webpack.common');
const BaseSrc = path.join(__dirname, '../../src/');

const libraryName = 'Wgl';
module.exports = merge(commonConfig, {
  mode: 'production',
  entry: {
    main: {
      import: path.resolve(BaseSrc, 'index.js'),
      library: {
        name: libraryName,
        type: 'var',
      },
    },
  },
  output: {
    path: path.resolve(__dirname, '../../dist/'),
    filename: '[name].js',
    clean: false,
  },
});
