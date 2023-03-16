const path = require('path');
const BaseSrc = path.join(__dirname, '../../src/');


module.exports = {
  mode: 'production',
  devtool: false, // 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: BaseSrc,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '@': BaseSrc,
    },
    extensions: ['.js'],
    modules: [BaseSrc, 'node_modules', path.join(__dirname, '../../node_modules')],
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
};
