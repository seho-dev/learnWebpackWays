const path = require('path')
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin")
module.exports = {
    mode: "development", // 开发环境
    devtool: "cheap-module-eval-source-map",
    entry: {
        main: "./index.js",
    },
    output: {
        filename: "[hash].[name].js",
        path: path.resolve(__dirname, "bundle")
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
        template: "./index.html"
    })]
}