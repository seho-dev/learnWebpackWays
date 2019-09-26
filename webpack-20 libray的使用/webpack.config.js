const path = require("path");
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    externals: 'lodash',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "dist.js",
        library: 'webpackNumbers',
        libraryTarget: 'umd'
    }
}