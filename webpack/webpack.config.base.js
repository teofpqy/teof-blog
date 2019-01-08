const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const relativePath = (p) => path.resolve(__dirname, p);

module.exports = {
  entry: relativePath('../src/main.js'),
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.html',
      inject: 'body',
    })
  ],
  output: {
    path: relativePath('../dist'),
    filename: '[name].bundle.js'
  },
}
