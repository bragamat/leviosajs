const packagejson = appName => `{
  "name": "${appName}",
  "description": "App bundled using LeviosaJs",
  "version": "1.0.0",
  "license": "MIT",
  "scripts": {
    "start": "webpack-dev-server --open --config webpack.dev.js --hot",
    "build": "webpack --config webpack.prod.js",
    "test": "jest --watchAll"
  },
  "dependencies": {
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "styled-components": "^5.0.1"
  },
  "devDependencies": {
    "@testing-library/react": "^9.4.0",
    "jest": "^25.1.0",
    "babel-jest": "^25.1.0",
    "babel-loader": "^8.0.6",
    "@babel/core": "^7.8.4",
    "@babel/preset-env": "^7.8.4",
    "@babel/preset-react": "^7.8.3",
    "webpack": "^4.41.6",
    "webpack-cli": "^3.3.11",
    "webpack-merge": "^4.2.2",
    "webpack-dev-server": "^3.10.3",
    "html-webpack-plugin": "^3.2.0"

  },
  "repository": {
    "type": "git",
    "url": ""
  }
}
`;

module.exports = packagejson;
