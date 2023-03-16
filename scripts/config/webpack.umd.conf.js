const path = require('path'),
  { merge } = require('webpack-merge'),
  commonConfig = require('./webpack.common');
const BaseSrc = path.join(__dirname, '../../src/');

// @wang/
const libraryName = 'utils';
module.exports = merge(commonConfig, {
  mode: 'production',
  entry: {
    umd: {
      import: path.resolve(BaseSrc, 'index.js'),
      library: {
        name: libraryName,
        type: 'umd',
        umdNamedDefine: true,
      },
    },
    min: {
      import: path.resolve(BaseSrc, 'index.js'),
      library: {
        name: libraryName,
        type: 'var',
      },
    },
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'libs/index.[name].js',
    clean: true, // 删除dist
  },
});
