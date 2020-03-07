const webpackCommonConfig = () => `const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["react-hot-loader/patch", "./index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    inline: true,
    contentBase: "./public",
    port: 3333
  },
  module: {
    rules: [
      {
        test: /\\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader/webpack", "babel-loader"],
        include: path.join(__dirname, "src")
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
`;

module.exports = webpackCommonConfig;
