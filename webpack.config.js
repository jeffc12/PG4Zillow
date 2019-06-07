const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './dist/index.html',
  filename: './index.html',
  inject: 'body'
})

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: 'style.[hash].css'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'main.[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/preset-env'],
          compact: false
        }
      },
      {
        test: /\.scss|css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 999999 
            }
          }
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, MiniCssExtractPluginConfig],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};