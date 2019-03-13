    require('@babel/register')({
        presets: ["@babel/preset-env"],
        "plugins": [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-syntax-import-meta",
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-json-strings",
            "@babel/transform-runtime"
          ]
    })

    // Import the rest of our application.
    module.exports = require('./app.js')