const path = require('path');

module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/assets/',
        library: 'MyLib',
        libraryTarget: 'var'
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
    }
};
