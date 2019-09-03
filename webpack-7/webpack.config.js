const path = require('path')
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin")
module.exports = {
    mode: "production",
    entry: {
        main: "./index.js",
        sub: "./sub.js"
    },
    output: {
        publicPath: "http://cdn.com",
        filename: "[hash].[name].js",
        path: path.resolve(__dirname, "bundle")
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
        template: "./index.html"
    })]
}