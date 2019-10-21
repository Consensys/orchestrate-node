const path = require('path');
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
      library: './src/index.js',
      contractregistry: './cli/contract-registry/index.js'
    },
    watchOptions: {
      ignored: [
        /node_modules/
      ]
    },
    target: 'node',
    devtool: 'source-map',
    externals: [nodeExternals()],
    output: {
      path: path.join(__dirname, "build"),
      filename: "[name].bundled.js",
      publicPath: 'build/',
      libraryTarget: "umd",
      libraryExport: 'default'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: [
                /node_modules/
              ],
              use: [
                {loader: 'babel-loader'},
                {loader: 'eslint-loader'},
                {loader: 'shebang-loader'}
              ]
            }
        ]
    },
    plugins: [
      // Put the shebang back on.
      new webpack.BannerPlugin({ banner: "#!/usr/bin/env node\n", raw: true }),
    ]
}
