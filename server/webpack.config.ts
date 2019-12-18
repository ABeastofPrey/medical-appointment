import { CheckerPlugin } from 'awesome-typescript-loader';
import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
    mode: 'production',
    target: 'node',
    context: path.resolve(__dirname, 'src'),
    entry: {
        server: ['../index.ts']
    },
    output: {
        filename: `[name].js`,
        path: path.resolve(__dirname) + '/dist',
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'awesome-typescript-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
        }, {
            test: /\.key$/,
            use: ['raw-loader'],
            include: path.resolve(__dirname, '/src/assets'),
            // exclude: path.resolve(__dirname, 'node_modules'),
        }]
    },
    plugins: [new CheckerPlugin(), new webpack.NormalModuleReplacementPlugin(/^any-promise$/, 'pinkie-promise')],
    resolve: {
        extensions: ['.ts', '.js']
    },
    node: {
        __filename: true,
        __dirname: true // 解决__dirname被替换成‘/’的问题
    },
};

export default config;
