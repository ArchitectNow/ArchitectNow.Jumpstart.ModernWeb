module.exports = {
    entry: {
       "app" : "./src/testfiles/file1.js"
    },
    mode: "development",
    output: {
        path: __dirname,
        filename: "../wwwroot/bundle.js"
    }
};