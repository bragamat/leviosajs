const packagesList = {
  script: `{
    "scripts": {
      "start": "webpack-dev-server --open --config webpack.dev.js --hot",
      "build": "webpack --config webpack.prod.js",
      "test": "jest --watchAll"
    }
  }`,
  dependencies: ["react", "react-dom", "styled-components"],
  devDependencies: [
    "@testing-library/react",
    "jest",
    "babel-jest",
    "babel-loader",
    "@babel/core",
    "@babel/polyfill",
    "@babel/preset-env",
    "@babel/preset-react",
    "webpack",
    "webpack-cli",
    "webpack-merge",
    "webpack-dev-server",
    "html-webpack-plugin",
    "react-hot-loader"
  ]
};

module.exports = packagesList;
