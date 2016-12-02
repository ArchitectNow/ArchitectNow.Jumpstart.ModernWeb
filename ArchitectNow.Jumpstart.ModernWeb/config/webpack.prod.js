var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  context: helpers.src(),
  output: {
    path: helpers.dist(),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].chunk.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].[hash].css')
  ]
});
