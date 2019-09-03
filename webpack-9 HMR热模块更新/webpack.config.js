const path = require('path')
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin")
const webpack = require("webpack");
module.exports = {
    mode: "development", // 开发环境
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: "./bundle",
        open: true,
        hot: true,
        hotOnly: true
    },
    entry: {
        main: "./index.js",
    },
    output: {
        filename: "[hash].[name].js",
        path: path.resolve(__dirname, "bundle")
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
        template: "./index.html"
    }),new webpack.HotModuleReplacementPlugin()]
}