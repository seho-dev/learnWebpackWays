const merge = require("webpack-merge");
const common = require("./webpack.common")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');



const productionConfig = {
    mode: "production",
    module: {
		rules:[{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'postcss-loader'
			]
		}]
	},
	output: {
        filename: "[name].js",
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "../bundle")
    },
    plugins: [new MiniCssExtractPlugin({}), new OptimizeCssAssetsPlugin({})]
}

module.exports = merge(common, productionConfig);