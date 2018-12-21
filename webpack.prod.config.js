const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')

module.exports = {
  devtool: 'source-map',
  entry: {
    all: __dirname + '/assets/js/index.js',
  },
  output: {
    path: __dirname + '/public/assets',
    filename: '[name].js',
    publicPath: '/assets',
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: 'css-loader', options: {sourceMap: true}},
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [nodeModulesPath],
            },
          },
          {
            loader: 'import-glob-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
}
