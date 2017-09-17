const webpack = require('webpack');
const Config = require('webpack-config').Config;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = new Config().extend('config/webpack.base.config.js').merge({
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    ]
});
