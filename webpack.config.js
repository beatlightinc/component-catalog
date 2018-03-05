const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsEntryPath = path.resolve(__dirname, 'index.ts');
const sassEntryPath = path.resolve(__dirname, 'scss', 'style.scss');
const outputPath = path.resolve(__dirname, 'static');

const sassLoaderRule = {
  test: /\.scss/,
  loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
};

const babelLoaderRule = {
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules/
};

module.exports = {
  entry: [
    jsEntryPath,
    sassEntryPath
  ],

  output: {
    path: outputPath,
    filename: 'js/bundle.js'
  },

  module: {
    rules: [
      sassLoaderRule,
      babelLoaderRule
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/style.css')
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },

  stats: {
    assets: true,
    modules: false
  },

  devtool: 'cheap-module-source-map'
};
