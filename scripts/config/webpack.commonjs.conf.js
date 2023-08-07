const path = require('path'),
  { merge } = require('webpack-merge'),
  commonConfig = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BaseSrc = path.join(__dirname, '../../src/');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: {
    main: {
      import: path.resolve(BaseSrc, 'index.js'),
      library: {
        type: 'commonjs',
      },
    },
  },
  output: {
    path: path.resolve(__dirname, '../../dist/'),
    filename: '[name].cjs',
    clean: false,
  },
  plugins: [
    // 清除dist文件夹
    new CleanWebpackPlugin(),
  ],
});
