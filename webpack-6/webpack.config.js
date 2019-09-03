const path = require('path')
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
    mode: "production",
    entry: "./index.js",
    output: {
        filename: "dist.js",
        path: path.resolve(__dirname, "bundle")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./index.html"
    }),new CleanWebpackPlugin()]
}