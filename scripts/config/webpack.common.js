const path = require('path');
const BaseSrc = path.join(__dirname, '../../src/');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'production',
  devtool: 'source-map', // 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: BaseSrc,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '@': BaseSrc,
    },
    extensions: ['.js', '.cjs'],
    modules: [
      BaseSrc,
      'node_modules',
      path.join(__dirname, '../../node_modules'),
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    minimize: true,
    minimizer: [
      ...(() => {
        let plugins = [];
        const TerserWebpackPlugin = require('terser-webpack-plugin');
        plugins = [
          new TerserWebpackPlugin({
            terserOptions: {
              compress: {
                warnings: true,
                drop_console: true,
                drop_debugger: true,
              },
            },
          }),
        ];
        return plugins;
      })(),
    ],
  },
  plugins: [
    // 清除dist文件夹
    // new CleanWebpackPlugin(),
  ],
};
