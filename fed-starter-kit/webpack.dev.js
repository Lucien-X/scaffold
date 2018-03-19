const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Jarvis = require('webpack-jarvis');

module.exports = {
  entry: {
    main: ['react-hot-loader/patch', 'babel-polyfill', './src/index.jsx'],
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:7000/',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  plugins: [
    new Jarvis({
      port: 1337, // optional: set a port
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.ejs',
      xhtml: true,
      minify: {
        // removeComments:true,
        // maxLineLength:150,
        caseSensitive: true,
        // collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        keepClosingSlash: true,
        sortAttributes: true,
        sortClassName: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js', // 这个得在项目根目录创建此文件
              },
            },
          },
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|woff(2)?|eot|ttf|otf|svg)$/,
        loader: 'url-loader',
        options: {
          context: '/',
          limit: 100000,
          name: '[name].[hash:8].[ext]',
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    port: 7000,
    historyApiFallback: true, // 404s will fallback to /index.html
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    publicPath: '/',
    inline: true,
    open: true,
    host: '0.0.0.0',
    // useLocalIp: true,
    headers: {
      Author: 'Lucien-X',
      'Access-Control-Allow-Origin': '*',
    },
    noInfo: true,
    clientLogLevel: 'none',
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
