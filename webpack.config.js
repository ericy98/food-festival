const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.join(__dirname + "/dist"),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            // outputs report.html in dist folder
            analyzerMode: "static", 
        })
    ],
    mode: 'development'
};

