const webpackConfig = `module.exports = {
  entry: './index.js',
  output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3333
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
    }]
  }
}`;

module.exports = webpackConfig;
