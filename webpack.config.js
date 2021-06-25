const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Galatic Age Calculator',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        enforce: 'pre',
      },
    ],
  },

  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
  },
}
