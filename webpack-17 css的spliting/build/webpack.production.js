const merge = require("webpack-merge");
const common = require("./webpack.common")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');



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
    plugins: [new MiniCssExtractPlugin({}), new OptimizeCssAssetsPlugin({})]
}

module.exports = merge(common, productionConfig);