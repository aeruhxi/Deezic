const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'app', 'renderer'),
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:9555',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'renderer',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.resolve(__dirname, 'app', 'renderer')
    }, {
      test: /\.css$/,
      loader: 'style!css',
      include: path.resolve(__dirname, 'app', 'assets', 'styles')
    }, {
      test: /\.woff2$/,
      loader: 'url?limit=65536&mimetype=application/font-woff2&name=fonts/[name].[ext]',
      include: path.resolve(__dirname, 'app', 'assets', 'fonts')
    }, {
      test: /\.ttf$/,
      loader: 'url?limit=65536&mimetype=application/octet-stream&name=fonts/[name].[ext]',
      include: path.resolve(__dirname, 'app', 'assets', 'fonts')
    }]
  },
  devServer: {
    hot: true,
    port: 9555,
    contentBase: 'dist'
  }
};
