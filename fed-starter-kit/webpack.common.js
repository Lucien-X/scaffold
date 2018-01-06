const webpack = require('webpack');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: [
            'react'
        ]
    },
    output: {
        filename: '[name].[chunkhash:8].js',
        path: path.resolve(__dirname, 'dist')
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
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: { loader: 'style-loader' },
                    use: [{
                        loader: 'css-loader',
                        options: {
                            context: '/',
                            name: '[name].[hash:8].[ext]'
                        }
                    }]
                }),
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