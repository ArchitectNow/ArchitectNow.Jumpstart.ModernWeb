const helpers = require('./helpers');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = webpackMerge(commonConfig, {

	/**
	 * Switch loaders to debug mode.
	 *
	 * See: http://webpack.github.io/docs/configuration.html#debug
	 */
	debug: true,

	/**
	 * Options affecting the output of the compilation.
	 *
	 * See: http://webpack.github.io/docs/configuration.html#output
	 */

	output: {
		/**
		 * The output directory as absolute path (required).
		 *
		 * See: http://webpack.github.io/docs/configuration.html#output-path
		 */
		path: helpers.build(),
		publicPath: '/',
		/**
		 * Specifies the name of each output file on disk.
		 * IMPORTANT: You must not specify an absolute path here!
		 *
		 * See: http://webpack.github.io/docs/configuration.html#output-filename
		 */
		filename: '[name].bundle.js',

		/**
		 * The filename of the SourceMaps for the JavaScript files.
		 * They are inside the output.path directory.
		 *
		 * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
		 */
		sourceMapFilename: '[name].map',

		/**
		 * The filename of non-entry chunks as relative path
		 * inside the output.path directory.
		 *
		 * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
		 */
		chunkFilename: '[id].chunk.js',
	},
	plugins: [
		new OpenBrowserPlugin({url: 'http://localhost:1234/index.html'})
	],
	devServer: {
		host: 'localhost',
		port: 1234,
		outputPath: helpers.build(),
		stats: 'minimal',
		// required for html5 router
		historyApiFallback: true
	}
});
