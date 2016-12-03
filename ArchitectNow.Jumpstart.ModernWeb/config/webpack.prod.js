var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var WriteFilePlugin = require('write-file-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    context: helpers.src(),
    output: {
        path: helpers.dist(),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin('[name].[hash].css'),
      new webpack.DefinePlugin({
          'process.env': {
              'ENV': JSON.stringify(ENV)
          }
      })
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        outputPath: helpers.dist(),
        // required for html5 router
        historyApiFallback: true,
        stats: 'minimal'
    }
});
