const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./src/testfiles/file5.ts",
    output: {
        path: path.resolve(__dirname, '..', 'wwwroot'),
        filename: "../wwwroot/bundle.js"
    },
    mode: "development",
    resolve: {

        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
			{
			    test: /\.html$/,
			    use: [{
                    loader: 'html-loader'
                }]
			},
			{
			    test: /\.ts$/,
			    use: [{
                    loader: 'awesome-typescript-loader'
                }]
			},
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: [{
                    loader: 'file-loader',

                    options: {
                        name: 'assets/[name].[hash].[ext]'
                    }
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
            minimize: false
          })
    ]
};