const path = require('path'),
  { merge } = require('webpack-merge'),
  glob = require('glob'),
  commonConfig = require('./webpack.common');
const BaseSrc = path.join(__dirname, '../../src/');

// @wang/
const libraryName = 'W';
module.exports = merge(commonConfig, {
  mode: 'production',
  entry: (() => {
    const entry = {};
    glob.sync('./src/**').forEach(file => {
      const [_, filename] = file.match(/src\\(.*)/) || ['', ''];
      // 只会打包index.js， 其他引入由index同步引入或异步引入
      if (path.extname(file) === '.js') {
        const name = filename.replace('.js', '');
        entry[name] = {
          import: path.join(BaseSrc, '../', file),
          library: {
            name: libraryName + '_' + name,
            type: 'umd',
          },
        };
      }
    });
    return {
      ...entry,
      'index.umd': {
        import: path.resolve(BaseSrc, 'index.js'),
        library: {
          name: libraryName,
          type: 'umd',
          umdNamedDefine: true,
        },
      },
      index: {
        import: path.resolve(BaseSrc, 'index.js'),
        library: {
          name: libraryName,
          type: 'var',
        },
      },
    };
  })(),
  output: {
    path: path.resolve(__dirname, '../../dist/'),
    filename: 'libs/[name].min.js',
  },
});
