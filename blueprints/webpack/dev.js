const webPackDevConfig = () => `const { merge } = require("webpack-merge");
const path = require('path')
const common = require("./webpack.common.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  entry: ["react-hot-loader/patch", "@babel/polyfill"],
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: "./public",
    port: 3333,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'react-hot-loader/webpack' },
          { loader: 'babel-loader' },
        ],
        include: path.join(__dirname, "src")
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      generateStatsFile: true
    })
  ]
});`

module.exports = webPackDevConfig
