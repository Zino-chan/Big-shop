
module.exports = {
  entry: {
    main: "./src/js/main.js",
    vendor: "./src/js/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif|jpeg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images',
            publicPath: 'images'
          }
        }
      }
    ]
  }
};
