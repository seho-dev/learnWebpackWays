const fs = require("fs");
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetsHtmlPlugin = require("add-asset-html-webpack-plugin");

const plugins = [new HtmlWebpackPlugin({
        filename: 'index.html'
    })]; // 抽象plugins数组
// 读取dll目录下的数据
let readFileList = fs.readdirSync(path.resolve(__dirname, "dll"));
readFileList.forEach(file => {
    if(/.*\.dll.js/.test(file)){
        plugins.push(new AddAssetsHtmlPlugin({
            filepath: path.resolve(__dirname, "dll", file)
        }) )
    }else if(/.*\.manifest.json/.test(file)){

    }
})

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
     rules: [
       { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
     ]
    },
    plugins
}