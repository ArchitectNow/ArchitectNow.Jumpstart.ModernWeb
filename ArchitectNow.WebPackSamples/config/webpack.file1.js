module.exports = {
    entry: {
       "app" : "./src/testfiles/file1.js"
    },
    output: {
        path: __dirname,
        filename: "../wwwroot/bundle.js"
    }
};