const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    popup: "./src/popup.ts",
    insertTemplate: "./src/insertTemplate.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
