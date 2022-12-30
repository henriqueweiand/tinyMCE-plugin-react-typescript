const webpack = require('webpack');
const path = require('path');

const tsDemoSourceFile = path.resolve('demo/ts/Demo.ts');
const jsDemoDestFile = path.resolve('scratch/compiled/demo.js');

module.exports = {
  mode: 'development',
  entry: tsDemoSourceFile,
  devtool: 'source-map',
  output: {
    filename: path.basename(jsDemoDestFile),
    path: path.dirname(jsDemoDestFile)
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true
          }
        }],
      }
    ]
  },
};
