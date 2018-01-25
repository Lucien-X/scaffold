const webpack = require('webpack');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: [
            'react',
            'react-dom'
        ]
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new ExtractTextPlugin("[name].[contenthash:8].css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.ejs',
            xhtml: true,
            minify: {
                // removeComments:true,
                // maxLineLength:150,
                caseSensitive: true,
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                keepClosingSlash: true,
                sortAttributes: true,
                sortClassName: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
            }
        }),
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', 
                query: {
                    presets: ['env','stage-0','react']
                }
            },
            // { 
            //     test: /\.scss$/,
            //     use:['style-loader', 'css-loader', 'sass-loader'], // 3
            //     exclude: /node_modules/ 
            // },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // 在开发环境使用 style-loader
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpg|gif|woff(2)?|eot|ttf|otf|svg)$/,
                loader: 'url-loader',
                options: {
                    context: '/',
                    limit: 100000,
                    name: '[name].[hash:8].[ext]'
                }
            },
        ]
    }
};