const path = require('path');

module.exports = {
  plugins: [
  ],
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loaders: 'file-loader',
      options: {
        name: '[name].[hash].[ext]',
        outputPath: 'assets/'
      }
    }, {
      test: /\.(css|less)$/,
      use: 'css-loader'
    }]
  },
  resolve: {
    alias: {
      src: path.resolve('./src')
    }
  }
};
