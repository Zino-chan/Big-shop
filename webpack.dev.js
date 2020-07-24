const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/assets"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: 'index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: [
          "style-loader",
          "css-loader", 
          "sass-loader" 
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader", 
          "sass-loader" 
        ],
    },
      
    ]
  }
});
