const FS = require('fs'),
  Path = require('path'),
  Webpack = require('webpack'),
  webpackUMDConfig = require('./config/webpack.umd.conf'),
  webpackESConfig = require('./config/webpack.es.conf');
Webpack(webpackUMDConfig, () => {
  Webpack(webpackESConfig, () => {
    FS.cp(
      Path.resolve(__dirname, '../npm/package.json'),
      Path.resolve(__dirname, '../dist/package.json'),
      () => {}
    );
    FS.cp(
      Path.resolve(__dirname, '../npm/.npmrc'),
      Path.resolve(__dirname, '../dist/.npmrc'),
      () => {}
    );
  });
});
