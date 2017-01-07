const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: ['./index.js'],
  output: {
    path: __dirname + '/dist/renderer',
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
      include: path.resolve(__dirname, 'app')
    }]
  }
};
