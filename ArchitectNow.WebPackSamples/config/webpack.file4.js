const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./src/testfiles/file4.js",
    mode: "development",
    output: {
        path: __dirname,
        filename: "../wwwroot/output.js"
    },
    module: {
        rules: [
			{
				test: /\.html$/,
				use: [{
                    loader: 'html-loader'
                }]
			}
        ]
    },
    plugins: [
			new CopyWebpackPlugin([{ from: path.resolve(__dirname, '..', 'src', 'testfiles', 'images'), to: 'images' }]),

		    new HtmlWebpackPlugin({
		        template: path.resolve(__dirname, '..', 'src', 'testfiles', 'index.html')
            }),
            new webpack.LoaderOptionsPlugin({ // the replacement for UglifyJsPlugin 
                minimize: true,
              }),
    ]
};