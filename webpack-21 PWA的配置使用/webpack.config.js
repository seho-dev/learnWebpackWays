const path = require("path");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    externals: 'lodash',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "dist.js",
        library: 'webpackNumbers',
        libraryTarget: 'umd'
    },
    plugins: [new WorkboxPlugin.GenerateSW({
        // these options encourage the ServiceWorkers to get in there fast
        // and not allow any straggling "old" SWs to hang around
        clientsClaim: true,
        skipWaiting: true
    })]
}