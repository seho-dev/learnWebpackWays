const path = require('path')
module.exports = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: "[name].js",
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, "../bundle")
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
        }]
    },
    optimization: {
        splitChunks: { // 如果这是一个空对象，那么分割的代码则是按照默认配置进行
            chunks: "all", // 只对异步或者同步或者全部的模块引入方式进行分割，all / async / initial
            minSize: 30000, // 引入的模块最小体积如果在值之类进行分割，否则不分割，这个是字节，计算/1000是kb
            // 同理还有maxSize，如果代码超出，将再次分割
            minChunks: 1, // 打包后的chunks模块中引入库的数量
            maxAsyncRequests: 5, // 最大异步并行最大请求数量，用途：控制分割的代码数量（默认是5）轻易不要更改
            maxInitialRequests: 3, // 入口并行最大请求数量，轻易不要更改
            automaticNameDelimiter: '~', // 分割代码连接字符串
            name: true, // 开启分割代码的文件名可定义（filename）
            cacheGroups: { // 缓存分组，此分组配置和chunks配置项必须是搭配，在判断引入的模块是异步还是同步之后需要走这个配置项进行分组，可以配置vendors为false
                // 缓存组：顾名思义，将分割的代码暂时缓存起来，把所有匹配成功的分割代码进行整合打包在一个文件中
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,  // 优先级：越小优先级越高，如果模块分别匹配条件和default成功，将通过此参数决定具体分配到哪个模块
                },
                default: { // 如果满足不了上面的缓存组，将执行下面的配置
                    minChunks: 2, // 模块引入数量
                    priority: -20,
                    reuseExistingChunk: true // 如果开启了此配置，将分割代码中引入的模块（分割过的）直接引入分割后的地址，不再进行分割
                }
            }
        }
    }
}