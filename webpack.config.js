const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  return {
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
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loaders: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'assets/'
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
};
