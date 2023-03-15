const path = require('path'),
  glob = require('glob');
const BaseSrc = path.join(__dirname, './src/');

// console.log(glob.sync('./src/**'));
const entry = {};
glob.sync('./src/**').forEach(file => {
  const [_, filename] = file.match(/src\\(.*)/) || ['', ''];
  // 只会打包index.js， 其他引入由index同步引入或异步引入
  if (path.extname(file) === '.js') {
    entry[filename.replace('.js', '')] = {
      import: path.join(BaseSrc, '../', file),
      library: {
        type: 'module',
      },
    };
  }
});
console.log(entry);

// @wang/
const libraryName = 'utils';

module.exports = {
  mode: 'production',
  devtool: false, // 'source-map',
  experiments: {
    outputModule: true,
  },
  entry,
  output: {
    path: path.resolve(__dirname, 'dist/es/'),
    filename: '[name].js',
    clean: true, // 删除dist
  },
  /* entry: {
    umd: {
      import: './src/index.js',
      library: {
        name: libraryName,
        type: 'umd',
        umdNamedDefine: true,
      },
    },
    lib: {
      import: './src/index.js',
      library: {
        name: libraryName,
        type: 'var',
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
    clean: true, // 删除dist
  }, */
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
    modules: [BaseSrc, 'node_modules', path.join(__dirname, './node_modules')],
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
