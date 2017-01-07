const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'app', 'renderer'),
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, 'dist', 'renderer'),
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
      include: path.resolve(__dirname, 'app', 'renderer', 'styles')
    }]
  }
};
