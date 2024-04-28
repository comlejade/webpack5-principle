const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
  },
  module: {
    // loader 优先级 pre > normal > inline > post
    rules: [
      {
        test: /\.js$/,
        // 同级别loadaer从右到左，从下到上执行
        // use: ["./loaders/demo/test-sync.js", "./loaders/demo/test-async.js"],
        // loader: "./loaders/demo/test-raw.js",
        // use: [
        //   "./loaders/demo/test-pitch.js",
        //   "./loaders/demo/test-pitch-2.js",
        //   "./loaders/demo/test-pitch-3.js",
        // ],
        loader: "./loaders/clear-log-loader.js",
      },
      {
        test: /\.js$/,
        loader: "./loaders/banner-loader",
        options: {
          author: "cjl",
        },
      },
      {
        test: /\.js$/,
        loader: "./loaders/babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  mode: "development",
};
