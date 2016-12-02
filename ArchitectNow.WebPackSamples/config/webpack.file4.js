module.exports = {
    entry: "./src/testfiles/file4.js",
    output: {
        path: __dirname,
        filename: "../wwwroot/bundle.js"
    },
    module: {
        loaders: [
			{
				test: /\.html$/,
				loader: 'html'
			}
        ]
    }
};