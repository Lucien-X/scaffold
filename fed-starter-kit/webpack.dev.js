const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    watch: true,
    devServer: {
        historyApiFallback: true, //404s fallback to ./index.html
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        publicPath: '/',
        inline: true,
        // open: 'Google Chrome',
        host:"0.0.0.0",
        // useLocalIp: true,
        headers: {
            "Author": "Lucien-X"
        },
        noInfo: true,
        clientLogLevel: "none",
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
});