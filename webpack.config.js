const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/assets/'
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: [],
                loader: 'ts-loader'
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, ''),
        compress: true,
        port: 9000,
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
