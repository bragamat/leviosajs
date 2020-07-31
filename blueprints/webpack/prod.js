const webpackProdConfig = () => `const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack")
module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true
  },
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
});`

module.exports = webpackProdConfig
