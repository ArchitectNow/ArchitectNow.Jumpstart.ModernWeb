var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var extractCSS = new ExtractTextPlugin('css/main.css');
/*
 * Webpack Plugins
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {

    // context: helpers.src(),
    /*
	 * The entry point for the bundle
	 * Our Angular.js app
	 *
	 * See: http://webpack.github.io/docs/configuration.html#entry
	 */
    entry: {
        'scripts/polyfills': helpers.src('app', 'polyfills.ts'),
        'scripts/vendor': helpers.src('app', 'vendor.ts'),
        'scripts/app': helpers.src('app', 'bootstrap.ts')
    },

    /*
	 * Options affecting the resolving of modules.
	 *
	 * See: http://webpack.github.io/docs/configuration.html#resolve
	 */
    resolve: {
        /*
		 * An array of extensions that should be used to resolve modules.
		 *
		 * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
		 */
        extensions: ['', '.ts', '.js'],
        // Make sure root is src
        // root: helpers.src(),
        // remove other default values
        modulesDirectories: ['node_modules'],

    },

    module: {
        /*
		 * An array of automatically applied loaders.
		 *
		 * IMPORTANT: The loaders here are resolved relative to the resource which they are applied to.
		 * This means they are not resolved relative to the configuration file.
		 *
		 * See: http://webpack.github.io/docs/configuration.html#module-loaders
		 */
        loaders: [
			/*
			 * Typescript loader support for .ts and Angular 2 async routes via .async.ts
			 * Replace templateUrl and stylesUrl with require()
			 *
			 * See: https://github.com/s-panferov/awesome-typescript-loader
			 * See: https://github.com/TheLarkInn/angular2-template-loader
			 */
			{
			    test: /\.ts$/,
			    loaders: [
					'awesome-typescript-loader'
			    ],
			    exclude: [/\.(spec|e2e)\.ts$/]
			},
			/*
			 * Json loader support for *.json files.
			 *
			 * See: https://github.com/webpack/json-loader
			 */
			{
			    test: /\.json$/,
			    loader: 'json'
			},
			{
			    test: /\.html$/,
			    loader: 'html'
			},
			{
			    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
			    loader: 'file?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.scss$/,
				include: [
					helpers.src('app')
				],
				loader: 'raw-loader!sass-loader'
			}
        ]
    },
    plugins: [
        		new webpack.ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			helpers.src()
		),
        new webpack.optimize.CommonsChunkPlugin({
        	name: [
                'scripts/vendor',
                'scripts/polyfills'
        	]
        }),
		new HtmlWebpackPlugin({
		    template: helpers.src('index.html')
		})
    ]
};
