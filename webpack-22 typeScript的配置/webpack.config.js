const path = require("path");

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "dist.js"
    },
}