const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:9555',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    path: __dirname + '/dist/renderer',
    filename: 'bundle.js'
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.resolve(__dirname, 'app')
    }]
  },
  devServer: {
    hot: true,
    port: 9555,
    contentBase: './dist'
  }
};
