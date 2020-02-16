const packagejson = appName => `{
  "name": "${appName}",
  "description": "App bundled using LeviosaJs",
  "version": "1.0.0",
  "license": "MIT",
  "scripts": {
    "start": "webpack-dev-server"
  },
  "dependencies": {
    "react": "^16.12.0",
    "react-dom": "^16.12.0"
  },
  "devDependencies": {
    "webpack": "^4.41.6",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3",
    "babel-loader": "^8.0.6",
    "@babel/core": "^7.8.4",
    "@babel/preset-env": "^7.8.4",
    "@babel/preset-react": "^7.8.3",
    "babel-preset-es2015": "^6.24.1"
  },
  "repository": {
    "type": "git",
    "url": ""
  }
}
`;

module.exports = packagejson;
