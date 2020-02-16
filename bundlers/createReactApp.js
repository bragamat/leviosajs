const fs = require("fs");
const chalk = require("chalk");
const mkdirp = require("mkdirp");
const { execSync } = require("child_process");
const readMe = require("../blueprints/readMe.js");
const staticFiles = require("../blueprints/static");
const webpackConfig = require("../blueprints/webpack");
const gitIgnore = require("../blueprints/gitIgnore.js");
const packagejson = require("../blueprints/packageJson.js");
const { stateless, reactIndex } = require("../blueprints/ReactComponents");

function createReactApp(appName) {
  console.log(chalk.yellow("wait a minute please"));
  console.log(chalk.yellow("Creating application......."));
  mkdirp(`./${appName}/src/`).then(() => {
    createStaticFiles(appName);
    createWebpackConfig(appName);
    createAppIndex(appName);
    createApp(appName);
    createReadmeGit(appName);
    execSync(`cd ${appName} && git init && npm i`);
    console.log(chalk.yellow("All setup!"));
    console.log(chalk.yellow(`cd ${appName} && npm start`));
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

function createReadmeGit(appName) {
  writeInFile(`./${appName}/readme.md`, readMe(appName));
  writeInFile(`./${appName}/.gitignore`, gitIgnore());
}

const writeInFile = (fileName, content) => {
  return fs.writeFile(fileName, content, err => {
    if (err) throw err;
  });
};

module.exports = createReactApp;
