const merge = require("webpack-merge")
const common = require("./webpack.common")

const developmentConfig = {
    mode: "development",
    optimization: {
        usedExports: true
    },
    module: {
        rules:[{
			test: /\.css$/,
			use: [
				'css-loader',
				'postcss-loader'
			]
		}]
    },
}

module.exports = merge(common, developmentConfig);

