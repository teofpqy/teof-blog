const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const relativePath = (p) => path.resolve(__dirname, p);

module.exports = {
  entry: relativePath('../src/main.js'),
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /.(css|less)$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader", options: {
              modules: true,
            }
          },
          { loader: 'postcss-loader' },
          {
            loader: "less-loader", options: {
              module: true,
              getLocalIdent: getCSSModuleLocalIdent
            }
          },
        ]
      },
      {
        test: /.(css|less)$/,
        include: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          'postcss-loader',
          {
            loader: "less-loader", options: {
              javascriptEnabled: true,
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.html',
      inject: 'body',
    })
  ],
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ],
    extensions: ['.jsx', '.js', '.css', '.less']
  },
  output: {
    path: relativePath('../dist'),
    filename: '[name].[chunkhash].js'
  },
}
