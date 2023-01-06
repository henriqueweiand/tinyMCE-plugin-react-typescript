const webpack = require("webpack");
const path = require("path");

const tsSourceFile = path.resolve("src/Main.ts");
const jsDestFile = path.resolve("dist/plugin.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TSLintPlugin = require("tslint-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new TSLintPlugin({
      files: ["./src/**/*.ts", "./src/**/*.tsx"],
    }),
  ],
  output: {
    filename: path.basename(jsDestFile),
    path: path.dirname(jsDestFile),
  },
  entry: tsSourceFile,
  mode: "production",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
      {
        test: /\.css$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
            },
          },
        ],
      },
    ],
  },
};
