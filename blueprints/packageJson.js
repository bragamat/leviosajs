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
  }
  "devDependencies": {
    "webpack": "^4.41.6",
    "webpack-dev-server": "^3.10.3"
  }
}
`;

module.exports = packagejson;
