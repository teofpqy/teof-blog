const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", options: {
              modules: true,
            }
          },
          'postcss-loader',
        ]
      },
    ]
  }
});
