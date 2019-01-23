const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const relativePath = (p) => path.resolve(__dirname, p);

module.exports = {
  entry: [
    'whatwg-fetch',
    relativePath('../src/main.js'),
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader", options: {
              modules: true,
            }
          },
          'postcss-loader',
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name]_[id].css"
    })
  ],
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ],
    alias: {
      'utils': path.resolve(__dirname, '../src/utils'),
      'data': path.resolve(__dirname, '../src/data')
    },
    extensions: ['.jsx', '.js', '.css' ]
  },
  output: {
    path: relativePath('../dist'),
    filename: '[name].[chunkhash].js'
  },
};
