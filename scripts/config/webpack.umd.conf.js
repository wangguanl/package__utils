const path = require('path'),
  { merge } = require('webpack-merge'),
  glob = require('glob'),
  commonConfig = require('./webpack.common');
const BaseSrc = path.join(__dirname, '../../src/');

// @wang/
const libraryName = 'Wgl';
module.exports = merge(commonConfig, {
  mode: 'production',
  entry: {
    main: {
      import: path.resolve(BaseSrc, 'index.js'),
      library: {
        name: libraryName,
        type: 'umd',
        umdNamedDefine: true,
      },
    },
  },
  /* entry: (() => {
    const libs = {};
    glob.sync('./src/**').forEach(file => {
      const [_, filename] = file.match(/src\\(.*)/) || ['', ''];
      // 只会打包index.js， 其他引入由index同步引入或异步引入
      if (path.extname(file) === '.js') {
        const name = filename.replace('.js', '');
        libs[name] = {
          import: path.resolve(BaseSrc, '../', file),
          library: {
            name: name === 'index' ? libraryName : libraryName + '_' + name,
            type: 'umd',
            umdNamedDefine: true,
          },
        };
      }
    });
    return libs;
  })(), */
  output: {
    path: path.resolve(__dirname, '../../dist/'),
    filename: 'main.js',
    clean: true,
  },
});
