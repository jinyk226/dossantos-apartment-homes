const path = require('path');

module.exports = {
  entry: {
    app: ['@babel/polyfill','./app/app.js']
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: path.resolve(__dirname, './app'),
        loader: 'babel-loader'
      },
    ]
  },
  devServer: {
    stats: {
      chunks: false
    }
  }
}