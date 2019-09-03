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
            test: /\.(png|jpg|jpeg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: "[hash][name].[ext]",
                    outputPath: 'images/'
                }
            }
        },{
            test: /\.(eot|woff|ttf|svg)$/,
            use: {
                loader: "file-loader"
            }
        }, {
            test: /\.scss$/,
            use: ["style-loader", {
                loader: "css-loader",
                options: {
                    importLoaders: 2, // 应用前面loader的数量,解决import引入的css样式不会再经过post和sassloader的处理
                    // modules: true // 开启模块化
                }
            }, "sass-loader", "postcss-loader"]
        }]
    }
}