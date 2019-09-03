const path = require("path"); // 引入nodejs函数

module.exports = {
  entry: "./index.js",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist") // 获取文件夹路径
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {}
        }
      }
    ]
  }
};
