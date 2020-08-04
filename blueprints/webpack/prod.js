const webpackProdConfig = () => `const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack")

const MinifyPlugin = require("babel-minify-webpack-plugin");
module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new MinifyPlugin()
  ]
})`

module.exports = webpackProdConfig
