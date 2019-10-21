const path = require('path');
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
      library: './src/index.js',
      contractregistry: './cli/contract-registry/index.js'
    },
    watchOptions: {
      ignored:  /node_modules/
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
    node: {
      __dirname: false
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude:  /node_modules/,
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                      "@babel/plugin-syntax-dynamic-import",
                      "@babel/plugin-syntax-import-meta",
                      "@babel/plugin-proposal-class-properties",
                      "@babel/plugin-proposal-json-strings",
                      "@babel/plugin-transform-runtime"
                    ]
                  }
                },
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
