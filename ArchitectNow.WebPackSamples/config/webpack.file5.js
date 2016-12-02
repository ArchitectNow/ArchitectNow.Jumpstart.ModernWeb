const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports = {
    entry: "./src/testfiles/file5.ts",
    output: {
        path: path.resolve(__dirname, '..', 'wwwroot'),
        filename: "../wwwroot/bundle.js"
    },
    resolve: {

        extensions: ['', '.ts', '.js'],
        modulesDirectories: ['node_modules'],

    },
    module: {
        loaders: [
			{
			    test: /\.html$/,
			    loader: 'html'
			},
			{
			    test: /\.ts$/,
			    loaders: [
					'awesome-typescript-loader'
			    ]
			},
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            }
        ],
        plugins: [
			new CopyWebpackPlugin([{ from: path.resolve(__dirname, '..', 'src', 'testfiles', 'images'), to: 'images' }]),

            new HtmlWebpackPlugin({
            	template: path.resolve(__dirname, '..', 'src', 'testfiles', 'index.html')
            })
        ]
    }
};