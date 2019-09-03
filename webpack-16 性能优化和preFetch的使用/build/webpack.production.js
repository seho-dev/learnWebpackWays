const merge = require("webpack-merge");
const common = require("./webpack.common")

const productionConfig = {
    mode: "production"
}

module.exports = merge(common, productionConfig);