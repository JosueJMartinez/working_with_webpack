module.exports = {
  entry: { main: "./src/index.js", vendor: "./src/vendor" },

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[hash].[ext]",
          publicPath: "./",
        },
      },
    ],
  },
};
