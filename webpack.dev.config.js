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
          {loader: 'style-loader', options: {sourceMap: true}},
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
  plugins: [],
  devServer: {
    port: 3000,
    inline: true,
    stats: 'minimal',
  },
}
