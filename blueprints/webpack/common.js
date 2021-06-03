const webpackCommonConfig = () => `const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: ["./index.js"],
  output: {
    filename: '[name].[hashName].js',
    path: path.resolve(__dirname, "build")
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    alias: {
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling"
    }
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
`

module.exports = webpackCommonConfig
