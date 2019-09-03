// 引入webpack和express
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleWare = require("webpack-dev-middleware")
const webpackConfig = require("./webpack.config");
// 编译器
const complier = webpack(webpackConfig);
var app = new express();

app.use(webpackDevMiddleWare(complier, {}))


app.listen(3000, ()=>{
    console.log("running")
})