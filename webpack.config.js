const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsEntryPath = path.resolve(__dirname, 'index.js');
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
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
