const Config = require('webpack-config').Config;
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = new Config().extend('config/webpack.base.config.js').merge({
    devtool: 'source-map',
    output: {
        pathinfo: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(),
        new webpack.WatchIgnorePlugin([
            path.resolve(__dirname, './'),
            path.resolve(__dirname, '../coverage'),
            path.resolve(__dirname, '../.nyc_output')
        ])
    ],
    devServer: {
        compress: true,
        port: 9000,
        hot: true
    }
});
