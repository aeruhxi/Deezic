const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'app', 'renderer'),
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'assets',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app', 'renderer', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'app', 'renderer'),
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'app', 'assets', 'scss'),
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(woff2|ttf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '/fonts/[name].[ext]'
        },
        include: path.resolve(__dirname, 'app', 'assets', 'fonts')
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=10000?name=images/[name].[ext]',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]'
        }
      }
    ]
  },
  target: 'electron-renderer'
};
