const fs = require("fs");
const mkdirp = require("mkdirp");
const staticFiles = require("../blueprints/static");
const webpackConfig = require("../blueprints/webpack");
const { stateless, reactIndex } = require("../blueprints/ReactComponents");
const packagejson = require("../blueprints/packageJson.js");
const { execSync } = require("child_process");

function createReactApp(appName) {
  mkdirp(`./${appName}/src/`).then(() => {
    createStaticFiles(appName);
    createWebpackConfig(appName);
    createAppIndex(appName);
    createApp(appName);
    execSync(`cd ${appName} && git init && npm i`);
  });
}

function createStaticFiles(appName) {
  const dir = `${appName}/public/`;
  mkdirp(dir).then(() => {
    writeInFile(dir + "index.html", staticFiles());
    writeInFile(`${appName}/package.json`, packagejson(appName));
  });
}

function createWebpackConfig(appName) {
  writeInFile(`${appName}/webpack.config.js`, webpackConfig);
}

function createAppIndex(appName) {
  writeInFile(`${appName}/index.js`, reactIndex());
}

function createApp(appName) {
  writeInFile(`${appName}/src/App.js`, stateless("App"));
}

const writeInFile = (fileName, content) => {
  return fs.writeFile(fileName, content, err => {
    if (err) throw err;
  });
};

module.exports = createReactApp;
