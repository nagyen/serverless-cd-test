// Documentation: https://webpack.js.org/configuration/

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.join(__dirname, 'src/handler.ts'),
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.ts',
      '.tsx'
    ]
  },
  output: {
    libraryTarget: 'commonjs', // exported as properties to module.exports
    path: path.join(__dirname, 'dist'),
    filename: 'lambda.js',
    pathinfo: true // include useful path info about modules, exports, requests, etc. into the generated code
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      { test: /\.ts(x?)$/, loader: 'ts-loader' }
    ],
  },
};
