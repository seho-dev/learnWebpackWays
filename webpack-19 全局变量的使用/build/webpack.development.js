const path = require('path');


const developmentConfig = {
    mode: "development",
    optimization: {
        usedExports: true
    },
    output: {
        filename: "[name].js",
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, "../bundle")
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

module.exports = developmentConfig;
