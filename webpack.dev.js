const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    // contentBase: "./dist",
    hot: true,
    port: 3000,
    watchContentBase: true,
    open: true,
  },
});
