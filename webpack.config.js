const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsEntryPath = path.resolve(__dirname, 'viewer-app', 'viewer-main.tsx');
const sassEntryPath = path.resolve(__dirname, 'src', 'scss', 'style.scss');
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

const tsLoaderRule = {
  test: /\.tsx?$/,
  loader: 'ts-loader'
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

  mode: 'development',

  module: {
    rules: [
      tsLoaderRule,
      babelLoaderRule,
      sassLoaderRule
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

  mode: "development",

  devtool: 'cheap-module-source-map'
};
