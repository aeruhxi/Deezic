const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, 'app', 'renderer'),
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, 'dist', 'public'),
    publicPath: 'public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.resolve(__dirname, 'app', 'renderer')
    }, {
      test: /\.css$/,
      loader: 'style!css',
      include: path.resolve(__dirname, 'app', 'assets', 'styles')
    }, {
      test: /\.woff2$/,
      loader: 'url?limit=65536&mimetype=application/font-woff2&name=/fonts/[name].[ext]',
      include: path.resolve(__dirname, 'app', 'assets', 'fonts')
    }, {
      test: /\.ttf$/,
      loader: 'url?limit=65536&mimetype=application/octet-stream&name=/fonts/[name].[ext]',
      include: path.resolve(__dirname, 'app', 'assets', 'fonts')
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url?limit=65536?name=images/[name].[ext]',
      include: path.resolve(__dirname, 'app', 'assets', 'images')
    }]
  },
  target: 'electron-renderer'
}
