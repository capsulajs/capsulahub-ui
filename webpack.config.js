const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  externals: [nodeExternals()],
  entry: path.resolve('src/lib/index.js'),
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpe?g|gif|svg|ico)$/,
      loaders: 'file-loader',
      options: {
        name: '[name].[hash].[ext]',
        outputPath: 'assets/img/'
      }
    }, {
      test: /\.(woff|woff2|ttf|eot)$/,
      loaders: 'file-loader',
      options: {
        name: '[name].[hash].[ext]',
        outputPath: 'assets/font/'
      }
    }]
  },
  plugins: [new CleanWebpackPlugin(['dist'])],
  output: {
    publicPath: 'dist/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    library: '',
    libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.js']
  }
};
