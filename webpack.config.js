const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsEntryPath = path.resolve(__dirname, 'src', 'ts', 'index.tsx');
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

  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'static'),
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    stats: {
      assets: true,
      modules: false
    }
  }
};
