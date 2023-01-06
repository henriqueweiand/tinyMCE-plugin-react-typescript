const webpack = require("webpack");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tsDemoSourceFile = path.resolve("demo/ts/Demo.ts");
const jsDemoDestFile = path.resolve("scratch/compiled/demo.js");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // Opções aqui...
    }),
  ],
  mode: "development",
  watch: true,
  entry: tsDemoSourceFile,
  devtool: "source-map",
  output: {
    filename: path.basename(jsDemoDestFile),
    path: path.dirname(jsDemoDestFile),
  },
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
