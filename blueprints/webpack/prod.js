const webpackProdConfig = () => `const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production"
});`;

module.exports = webpackProdConfig;
