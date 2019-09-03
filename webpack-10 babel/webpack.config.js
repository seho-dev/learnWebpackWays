const path = require('path')

module.exports = {
    mode: "production",
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "bundle")
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/, // 除了哪个目录不做翻译处理
            loader: "babel-loader"
            // options: {
            //     presets: [["@babel/preset-env",{
            //         useBuiltIns: 'usage'
            //     }]]
            // },
        }, {
            test: /\.(png|jpg|jpeg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: "[hash][name].[ext]",
                    outputPath: 'images/'
                }
            }
        }, {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
        }]
    }
}