const FS = require('fs'),
  Path = require('path'),
  Webpack = require('webpack'),
  webpackCommonjsConfig = require('./config/webpack.commonjs.conf'),
  webpackES5Config = require('./config/webpack.es5.conf'),
  webpackESModuleConfig = require('./config/webpack.esmodule.conf');
Webpack(webpackCommonjsConfig, () => {
  Webpack(webpackES5Config, () => {
    Webpack(webpackESModuleConfig, () => {
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
      /* FS.cp(
        Path.resolve(__dirname, '../src'),
        Path.resolve(__dirname, '../dist/src'),
        { recursive: true },
        () => {}
      ); */
    });
  });
});
