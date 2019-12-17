const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: {
        server: ['./index.ts']
    },
    output: {
        filename: `[name].js`,
        path: path.resolve(__dirname) + '/dist',
        publicPath: './'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'awesome-typescript-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [new CheckerPlugin()],
    resolve: {
        extensions: ['.ts', '.js']
    },
    node: {
        __filename: true,
        __dirname: true // 解决__dirname被替换成‘/’的问题
    },
    target: 'node',
    mode: 'production'
};
