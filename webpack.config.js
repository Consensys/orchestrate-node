const path = require('path');

const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: [
      './src/index.js'
    ],
    watchOptions: {
      ignored: /node_modules/
    },
    target: 'node',
    devtool: 'source-map',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [
                {loader: 'babel-loader'},
                {loader: 'eslint-loader'}
              ]
            }
        ]
    }
}
