const webpackConfig = `module.exports = {
  entry: './App.js',
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
          presets: ['es2015', 'react']
        }
    }]
  }
}`;

module.exports = webpackConfig;
