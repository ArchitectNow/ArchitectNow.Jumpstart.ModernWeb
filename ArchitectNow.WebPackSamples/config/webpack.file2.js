module.exports = {
    entry: {
       "app" : "./src/testfiles/file2.js"
    },
    mode: "development",
    output: {
        path: __dirname,
        filename: "../wwwroot/bundle.js"
    }
};