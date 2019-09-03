const merge = require("webpack-merge")
const common = require("./webpack.common")

const developmentConfig = {
    mode: "development",
    optimization: {
        usedExports: true
    },
}

module.exports = merge(common, developmentConfig);

