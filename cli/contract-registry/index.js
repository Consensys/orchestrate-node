require('@babel/register')({
    presets: ["@babel/preset-env"],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-syntax-import-meta",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-json-strings",
        "@babel/plugin-transform-runtime"
    ]
})

console.log(process.argv);
require('../../src/contractRegistry/cli').cli(process.argv);