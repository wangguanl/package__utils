const path = require('path'),
  { merge } = require('webpack-merge'),
  glob = require('glob'),
  commonConfig = require('./webpack.common');
const BaseSrc = path.join(__dirname, '../../src/');

module.exports = merge(commonConfig, {
  mode: 'production',
  experiments: {
    outputModule: true,
  },
  entry: (() => {
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
    return entry;
  })(),
  output: {
    path: path.resolve(__dirname, '../../dist/es/'),
    filename: '[name].js',
    clean: false,
  },
});
